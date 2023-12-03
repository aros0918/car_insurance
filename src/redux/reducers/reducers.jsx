import { combineReducers } from "redux";
import status from './step';
import year from './year';
import vehicle from './vehicle';
import model from './model';

export default combineReducers({
  status,
  year,
  vehicle,
  model,
});
