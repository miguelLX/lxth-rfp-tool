import constants from "../constants";
import { notificationReducer as reducer } from "../reducers";

export const notifications = {
  success,
  error,
  clear
};

function success(message) {
  return { type: constants.ALERT_SUCCESS, reducer: reducer, payload: message };
}

function error(message) {
  return { type: constants.ALERT_ERROR, reducer: reducer, payload: message };
}

function clear() {
  return { type: constants.ALERT_CLEAR, reducer: reducer };
}
