import { combineReducers } from "redux";
import review from "./review";
import reviewrecent from "./review_recent";
import reviewdetail from './review_detail';
import status from './step';
import company from './company';
import login from './login';

export default combineReducers({
  status,
  review,
  reviewrecent,
  reviewdetail,
  login,
  company,
});
