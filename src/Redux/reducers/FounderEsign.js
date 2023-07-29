import { FOUNDER_ESIGN_REQUEST, FOUNDER_ESIGN_SUCCESS, FOUNDER_ESIGN_FAILED, FOUNDER_CAMPAIGN_FAILED, FOUNDER_CAMPAIGN_REQUEST, FOUNDER_CAMPAIGN_SUCCESS } from "../constants/FounderEsign";

export const FounderEsignReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case FOUNDER_ESIGN_REQUEST: return { ...state }

        case FOUNDER_ESIGN_SUCCESS: return { ...state, founderEsign: payload }

        case FOUNDER_ESIGN_FAILED: return { ...state, error: payload }

        default: return state
    }
}

export const FounderCampaignReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case FOUNDER_CAMPAIGN_REQUEST: return { ...state }

        case FOUNDER_CAMPAIGN_SUCCESS: return { ...state, campaignDetail: payload }

        case FOUNDER_CAMPAIGN_FAILED: return { ...state, error: payload }

        default: return state
    }
}