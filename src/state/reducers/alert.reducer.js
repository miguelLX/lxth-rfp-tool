import constants from "../constants";

export function alertReducer(state = {}, action) {
  switch (action.type) {
    case constants.ALERT_SUCCESS:
      // eslint-disable-next-line prettier/prettier
      return { ...state, alert: { type: "alert-success", message: action.payload } };
    case constants.ALERT_ERROR:
      // eslint-disable-next-line prettier/prettier
      return { ...state, alert: { type: "alert-danger", message: action.payload } };
    case constants.ALERT_CLEAR:
      return { ...state, alert: { type: null, message: null } };
    default:
      return state;
  }
}
