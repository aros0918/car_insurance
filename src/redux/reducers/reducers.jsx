import { combineReducers } from "redux";
import status from './step';
import year from './year';
import vehicle from './vehicle';
import model from './model';
import birthyear from './birthyear';
import birthday from './birthday';

export default combineReducers({
  birthday,
  birthyear,
  status,
  year,
  vehicle,
  model,
});
