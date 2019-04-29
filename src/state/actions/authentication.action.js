import constants from "../constants";
import { authenticationService } from "../services";
import { authenticationReducer } from "../reducers";

export const login = async (email, password, history, dispatch) => {
  const user = authenticationService.login(email, password);
  authenticationService.login(email, password).then(
    user => {
      history.push("/");
      return dispatch({
        type: constants.LOGIN_REQUEST,
        reducer: authenticationReducer,
        payload: user
      });
    },
    error => {
      return dispatch({
        type: constants.LOGIN_FAILURE,
        payload: null
      });
    }
  );
};
