import { FOUNDER_ESIGN_REQUEST, FOUNDER_ESIGN_SUCCESS, FOUNDER_ESIGN_FAILED } from "../constants/FounderEsign";

export const FounderEsignAction = (DATA) => (dispatch) => {
    try {
        dispatch({ type: FOUNDER_ESIGN_REQUEST });
        dispatch({ type: FOUNDER_ESIGN_SUCCESS, payload: DATA });
    } catch (error) {
        dispatch({ type: FOUNDER_ESIGN_FAILED })
    }
};
