import { GET_WEATHER_BY_LOCATION } from "../Type";
interface initialStateCloud {
  weather_data: any;
}
const initialState: initialStateCloud = {
  weather_data: {},
};

const weatherReducer = (state = { ...initialState }, action: any) => {
  switch (action.type) {
    case GET_WEATHER_BY_LOCATION:
      return {
        ...state,
        weather_data: { ...action.payload },
      };

    default:
      return state;
  }
};

export default weatherReducer;
