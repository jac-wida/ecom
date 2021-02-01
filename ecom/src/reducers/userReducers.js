import {
  USER_REQUEST_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
} from "../constants/userConstants";

export const userLoginReducer = (initialState = {}, action) => {
  switch (action.type) {
    case USER_REQUEST_LOGIN:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};
    default:
      return initialState;
  }
};
