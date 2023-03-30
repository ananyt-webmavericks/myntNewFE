import { FOUNDER_SIGNUP_DATASTORE_FAILED, FOUNDER_SIGNUP_DATASTORE_REQUEST, FOUNDER_SIGNUP_DATASTORE_SUCCESS } from "../constants/FounderSignUp";

export const storeFounderSignUpData = (DATA) => (dispatch) => {
    try {
        dispatch({ type: FOUNDER_SIGNUP_DATASTORE_REQUEST });
        dispatch({ type: FOUNDER_SIGNUP_DATASTORE_SUCCESS, payload: DATA });
    } catch (error) {
        dispatch({ type: FOUNDER_SIGNUP_DATASTORE_FAILED })
    }
};
