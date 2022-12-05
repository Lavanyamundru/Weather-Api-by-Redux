import { weatherServices } from "../Services/Weather.services";
import { GET_WEATHER_BY_LOCATION } from "../Types";
const getWeatherDetailsByLocation = (location: any) => {
  return async (dispatch: any) => {
    try {
      const res = await weatherServices.weatherDetailsByLocationData(location);

      dispatch({
        type: GET_WEATHER_BY_LOCATION,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: GET_WEATHER_BY_LOCATION,
        payload: error,
      });
    }
  };
};
export const weatherActions = {
  getWeatherDetailsByLocation,
};
