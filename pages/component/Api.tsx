import React from "react";
import { useState } from "react";
import axios from "axios";
import { Input, Button } from "./Weatherstyle";
import Weatherdata from "./Weatherdata";

import styled from "styled-components";

const Api = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d987b512cd513f5d8f09ad2a29104ce7`
      );
      if (res?.data) {
        console.log("weather data", res.data);
        setWeatherDetails(res.data);
      } else {
        setWeatherDetails(null);
      }
    } catch (e) {
      setWeatherDetails(null);
      alert("please enter Correct City Name!");
    }
    setLoading(false);
  };
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
      <Weatherdata weatherDetails={weatherDetails} loading={loading} />
    </>
  );
};

export default Api;
