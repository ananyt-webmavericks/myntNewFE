import { FOUNDER_ESIGN_REQUEST, FOUNDER_ESIGN_SUCCESS, FOUNDER_ESIGN_FAILED, FOUNDER_CAMPAIGN_FAILED, FOUNDER_CAMPAIGN_REQUEST, FOUNDER_CAMPAIGN_SUCCESS } from "../constants/FounderEsign";

export const FounderEsignAction = (DATA) => (dispatch) => {
    try {
        dispatch({ type: FOUNDER_ESIGN_REQUEST });
        dispatch({ type: FOUNDER_ESIGN_SUCCESS, payload: DATA });
    } catch (error) {
        dispatch({ type: FOUNDER_ESIGN_FAILED })
    }
};

export const FounderCampaignAction = (DATA) => (dispatch) => {
    try {
        dispatch({ type: FOUNDER_CAMPAIGN_REQUEST });
        dispatch({ type: FOUNDER_CAMPAIGN_SUCCESS, payload: DATA });
    } catch (error) {
        dispatch({ type: FOUNDER_CAMPAIGN_FAILED })
    }
};
