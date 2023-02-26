import { LOGIN_SUCCESS , LOGIN_REQUEST , LOGIN_FAILED  , USER_EMAIL_SUCCESS , USER_EMAIL_FAILED , USER_EMAIL_REQUEST} from "../constants/LoginConstants"

const initialState = {
    userData: [],
    userInfo:{
        username:'',
        mobileNo:''
    }
    
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

  export const userEmailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_EMAIL_REQUEST:
            return { ...state }

        case USER_EMAIL_SUCCESS:
            return { ...state, userInfo: payload }

        case USER_EMAIL_FAILED:
            return { ...state, error: payload }

        default: return state
    }
  };