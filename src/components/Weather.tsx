/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import {
  Button,
  Div,
  Para,
  Span,
  H3,
 
} from "./weatherstyles";
import { RootState } from "../redux/Reducer/rootReducer";
import { weatherActions } from "../Redux/Action/Weather.Actions";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";

const Weather = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [loader, setLoading] = useState(false);
  const [dayTime, setDayTime] = useState("");
  const weatherData = useSelector(
    (state: RootState) => state.weather.weather_data
  );
  const options = [
    { name: "Lucknow", value: "Lucknow" },
    { name: "Goa", value: "Goa" },
    { name: "Delhi", value: "Delhi" },
    { name: "Hyderabad", value: "Hyderabad" },
    { name: "UP", value: "UP" },
    { name: "Mumbai", value: "Mumbai" },
    { name: "chennai", value: "chennai" },
    { name: " coimbatore", value: "coimbatore" },
    { name: "kolkata", value: "kolkata" },
    { name: "ahmedabad", value: "ahmedabad" },
    { name: "Banglore", value: "Banglore" },
    { name: "Europe", value: "Europe" },
    { name: "Gujarat", value: "Gujarat" },
    { name: "korea", value: "korea" },
    { name: "HimachalPradesh", value: "HimachalPradesh" },
    { name: "Ireland", value: "Ireland" },
    { name: "jaipur", value: "jaipur" },
    { name: "pune", value: "pune" },
    { name: "Kerala", value: "Kerala" },
    { name: "Karnataka", value: "Karnataka" },
    { name: "guntur", value: "guntur" },
    { name: "Madhyapradesh", value: "Madhyapradesh" },
    { name: "England", value: "England" },
    { name: "France", value: "France" },
    { name: "Australia", value: "Australia" },
  ];
  console.log(weatherData, "weatherData");
  const handleSearch = async () => {
    setLoading(true);
    await dispatch(weatherActions.getWeatherDetailsByLocation(value) as any);
    setLoading(false);

    var myDate = new Date();
    var hrs = myDate.getHours();
    if (hrs < 12) setDayTime("Morning");
    else if (hrs >= 12 && hrs <= 17) setDayTime("Afternoon");
    else if (hrs >= 17 && hrs <= 24) setDayTime("Evening");
  };
  const inputChange = (e) => {
    setValue(e);
  };

  const sunrise = weatherData?.sys?.sunrise;
  const sunset = weatherData?.sys?.sunset;

  return (
    <>
      <div>
        <H3> Weather Report With Search of City</H3>
        <SelectSearch
          options={options}
          name="city"
          placeholder="Enter city name"
          search="true"
          value={value}
          onChange={inputChange}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {loader && <div>loader ...</div>}
      {!loader &&
      Object.keys(weatherData).length !== 0 &&
      weatherData.cod != 404 ? (
        <Div dayTime={dayTime}>
          <Para> {weatherData?.name}</Para>
          <span> {dayjs().format("ddd,MMM D,YYYY")}</span>
          <p>
            <span>Latitude:- {weatherData?.coord?.lat}</span>
            <Span>Longitude:- {weatherData?.coord?.lon}</Span>
          </p>
          <p>
            <span>Temperature:- {weatherData?.main?.temp} &deg;C</span>
            <Span>Humidity:- {weatherData?.main?.humidity}%</Span>
          </p>
          <p>
            <span>
              Sunrise:-
              {dayjs().format("ddd,MMM D,YYYY") +
                dayjs(sunrise * 1000).format("h:mm A")}
            </span>

            <Span>
              SunSet:-{" "}
              {dayjs(new Date(sunset * 1000).toLocaleString()).format(
                "h:mm:ss a"
              )}
            </Span>
          </p>
        </Div>
      ) : (
        <p> {weatherData.message}</p>
      )}
    </>
  );
};
export default Weather;
