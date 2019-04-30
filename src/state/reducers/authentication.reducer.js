import constants from "../constants";

export function authenticationReducer(state, action) {
  //console.log("@authenticationReducer" + action.payload.username);
  //action.payload.username = action.payload.username + "_tampered";

  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return { ...state, user: action.payload };
    case constants.LOGIN_FAILURE:
      return state;
    default:
      return state;
  }
}
