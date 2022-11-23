import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { Input, Button, Div, Para, Span ,H3} from "./weatherstyles";
import { RootState } from "../redux/Reducer/rootReducer";
import { weatherActions } from "../Redux/Action/Weather.Actions";

type CustomWeatherProps = {
  loader: Boolean;
  weatherDetails: any;
};

const Weather = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const [loader, setLoading] = useState(false);

  const weatherData = useSelector(
    (state: RootState) => state.weather.weather_data
  );

  console.log(weatherData, "weatherData");

  const handleSearch = async () => {
    setLoading(true);
    await dispatch(weatherActions.getWeatherDetailsByLocation(value) as any);
    setLoading(false);
  };

  const sunrise = weatherData?.sys?.sunrise;
  const sunset = weatherData?.sys?.sunset;

  return (
    <>
      <div>
      <H3> Weather Report With Search of City</H3>
        <Input
          type="text"
          placeholder="Enter city name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Button onClick={handleSearch}>Search</Button>
      </div>

      {loader && <div>loader ...</div>}
      {!loader && Object.keys(weatherData).length !== 0 && (
        <Div>
          
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
              Sunrise:-{" "}
              {dayjs(new Date(sunrise * 1000).toLocaleString()).format(
                "h:mm:ss a"
              )}
            </span>

            <Span>
            SunSet:-
              {dayjs(new Date(sunset * 1000).toLocaleString()).format(
                "h:mm:ss a"
              )}
            </Span>
          </p>
        </Div>
      )}
    </>
  );
};
export default Weather;
