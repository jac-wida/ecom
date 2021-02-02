import {
  USER_REQUEST_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_REQUEST_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
} from '../constants/userConstants';

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

export const userRegisterReducer = (initialState = {}, action) => {
  switch (action.type) {
    case USER_REQUEST_REGISTER:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};

export const userDetailsReducer = (initialState = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...initialState, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};

export const userUpdateProfileReducer = (initialState = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};