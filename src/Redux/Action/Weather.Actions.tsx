import { weatherServices } from "../Services/Weather.services";
import { GET_WEATHER_BY_LOCATION } from '../Type'

const getWeatherDetailsByLocation = (location: any) => {
  return async (dispatch: any) => {
    try {
      //   dispatch({ type: FAQ_LOADING, payload: true });
      const res = await weatherServices.weatherDetailsByLocationData(location);

      dispatch({
        type: GET_WEATHER_BY_LOCATION,
        payload: res,
      });

      //   dispatch({ type: FAQ_LOADING, payload: false });
    } catch (error) {
      //   dispatch({ type: FAQ_LOADING, payload: false });
    }
  };
};

export const weatherActions = {
  getWeatherDetailsByLocation,
};
