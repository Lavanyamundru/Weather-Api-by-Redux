import { useState } from "react";
import { getWeatherData } from "./weatherApi";
import dayjs from "dayjs";
import { Input, Button, Div, Para, Span } from "./Weatherstyle";

type CustomWeatherProps = {
  loading: Boolean;
  weatherDetails: any;
};

const HomeSection = ({ loading, weatherDetails }: CustomWeatherProps) => {
  const [value, setValue] = useState("");
  const [loader, setLoading] = useState(false);
  const [weatherData, setWeatherDetails] = useState<any>({});

  const handleSearch = async () => {
    setLoading(true);
    getWeatherData(value, setWeatherDetails);
    setLoading(false);
  };

  const sunrise = weatherDetails?.sys?.sunrise;
  const sunset = weatherDetails?.sys?.sunrise;

  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="Enter city name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Button onClick={handleSearch}>Search</Button>
      </div>

      {loading && <div>Loading ...</div>}
      {!loading && Object.keys(weatherDetails).length !== 0 && (
        <Div>
          <Para> {weatherDetails?.name}</Para>
          <span> {dayjs().format("ddd,MMM D,YYYY")}</span>
          <p>
            <span>Latitude:- {weatherDetails?.coord?.lat}</span>
            <Span>Longitude:- {weatherDetails?.coord?.lon}</Span>
          </p>
          <p>
            <span>Temperature:- {weatherDetails?.main?.temp} &deg;C</span>
            <Span>Humidity:- {weatherDetails?.main?.humidity}%</Span>
          </p>
          <p>
            <span>
              Sunrise:-{" "}
              {dayjs(new Date(sunrise * 1000).toLocaleString()).format(
                " h:mm:ss A "
              )}
            </span>

            <Span>
              SunSet:-
              {dayjs(new Date(sunset * 100).toLocaleString()).format(
                "h:mm:ss A"
              )}
            </Span>
          </p>
        </Div>
      )}
    </>
  );
};
export default HomeSection;
