import { LOGIN_REQUEST , LOGIN_SUCCESS ,LOGIN_FAILED } from "../constants/LoginConstants";

const initialState = {
    userData: [],
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
  