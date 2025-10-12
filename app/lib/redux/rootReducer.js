import { combineReducers } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherSlice";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;