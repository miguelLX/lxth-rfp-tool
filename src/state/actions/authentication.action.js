import constants from "../constants";
import { notifications } from "./";
import { authenticationService } from "../services";
import { authenticationReducer } from "../reducers";

export const login = async (username, password, history, dispatch) => {
  dispatch(request(username));

  authenticationService.login(username, password).then(
    user => {
      dispatch(success(user));
      history.push("/");
    },
    error => {
      dispatch(failure(error.toString()));
      dispatch(notifications.error(error.toString()));
    }
  );

  function success(user) {
    // eslint-disable-next-line prettier/prettier
    return { type: constants.LOGIN_REQUEST, reducer: authenticationReducer, payload: user };
  }

  function failure(error) {
    // eslint-disable-next-line prettier/prettier
    return { type: constants.LOGIN_FAILURE, reducer: authenticationReducer, payload: error };
  }

  function request(user) {
    return { type: constants.LOGIN_REQUEST, user };
  }
};
