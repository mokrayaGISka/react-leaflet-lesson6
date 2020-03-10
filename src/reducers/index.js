import { combineReducers } from "redux";
import LayersReducer from "./layers";

const allReducers = combineReducers({
  layers: LayersReducer
});

export default allReducers;