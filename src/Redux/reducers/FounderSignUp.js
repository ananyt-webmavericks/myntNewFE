import { FOUNDER_SIGNUP_DATASTORE_FAILED, FOUNDER_SIGNUP_DATASTORE_REQUEST, FOUNDER_SIGNUP_DATASTORE_SUCCESS } from "../constants/FounderSignUp";

export const storeFounderSignUpData = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case FOUNDER_SIGNUP_DATASTORE_REQUEST: return { ...state }

        case FOUNDER_SIGNUP_DATASTORE_SUCCESS: return { ...state, founderData: payload }

        case FOUNDER_SIGNUP_DATASTORE_FAILED: return { ...state, error: payload }

        default: return state
    }
}