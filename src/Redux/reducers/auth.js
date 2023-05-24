import {UPDATE_LOGIN_REQUEST, UPDATE_LOGIN_SUCCESS, UPDATE_LOGIN_FAILED, LOGIN_SUCCESS , LOGIN_REQUEST , LOGIN_FAILED  , USER_EMAIL_SUCCESS , USER_EMAIL_FAILED , USER_EMAIL_REQUEST} from "../constants/LoginConstants"

const initialState = {
    userData: [],
    userMail: '',
    userKycDetails : {}
};

export const userDataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state }

        case LOGIN_SUCCESS:
            return { ...state, userData: payload }

        case LOGIN_FAILED:
            return { ...state, error: payload }

        default: return state
    }
  };
export const updateUserDataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_LOGIN_REQUEST:
            return { ...state }

        case UPDATE_LOGIN_SUCCESS:
            return { ...state, userData: payload }

        case UPDATE_LOGIN_FAILED:
            return { ...state, error: payload }

        default: return state
    }
  };

  export const userEmailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_EMAIL_REQUEST:
            return { ...state }

        case USER_EMAIL_SUCCESS:
            return { ...state, userMail: payload }

        case USER_EMAIL_FAILED:
            return { ...state, error: payload }

        default: return state
    }
  };