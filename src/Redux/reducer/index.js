import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";

let reducers = combineReducers({ CounterReducer });
export default reducers;
