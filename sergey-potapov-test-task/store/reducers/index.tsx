import { combineReducers } from "redux";
import { clientsReducer } from "./clientsReducer";

export default combineReducers({
  client: clientsReducer,
});
