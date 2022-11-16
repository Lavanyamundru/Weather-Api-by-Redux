import React from "react";
import dayjs from "dayjs";
import { sys } from "typescript";
import styled from "styled-components";
import { Div, Para, Span } from "./Weatherstyle";

const Weatherdata = ({ loading, weatherDetails }: any) => {
  const sunrise = weatherDetails?.sys?.sunrise;
  const sunset = weatherDetails?.sys?.sunrise;

  return (
    <>
      {loading && <div>Loading ...</div>}
      {!loading && weatherDetails && (
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

export default Weatherdata;
