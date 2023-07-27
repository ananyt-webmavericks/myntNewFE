import { FOUNDER_ESIGN_REQUEST, FOUNDER_ESIGN_SUCCESS, FOUNDER_ESIGN_FAILED } from "../constants/FounderEsign";

export const FounderEsignReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case FOUNDER_ESIGN_REQUEST: return { ...state }

        case FOUNDER_ESIGN_SUCCESS: return { ...state, founderEsign: payload }

        case FOUNDER_ESIGN_FAILED: return { ...state, error: payload }

        default: return state
    }
}