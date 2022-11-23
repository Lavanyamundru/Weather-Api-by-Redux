import { combineReducers } from "redux";
import weatherReducer from '../Reducer/Weather.Reducer'

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
