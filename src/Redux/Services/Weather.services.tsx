import axios from "axios";

const weatherDetailsByLocationData = async (value: String) => {
  return await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d987b512cd513f5d8f09ad2a29104ce7`
  )
    .then(async (res) => {
      return await res.data;
    })
    .catch((error) => {
      throw error.response.data;
    });
};

export const weatherServices = {
  weatherDetailsByLocationData,
};
