import { 
    VERIFY_PAN_REQUEST, 
    VERIFY_PAN_SUCCESS, 
    VERIFY_PAN_FAILED,
    VERIFY_BANK_FAILED , 
    VERIFY_BANK_REQUEST , 
    VERIFY_BANK_SUCCESS} from "../constants/verifyKycConstant"

const initialState = {
    panDetails :'',
    bankDetails:{}
}
   

export const verifyPanReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case VERIFY_PAN_REQUEST:
            return { ...state }

        case VERIFY_PAN_SUCCESS:
            return { ...state, panDetails: payload}

        case VERIFY_PAN_FAILED:
            return { ...state, error: payload }

        default: return state
    }
  }

export const verifyBankReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case VERIFY_BANK_REQUEST:
            return { ...state }

        case VERIFY_BANK_SUCCESS:
            return { ...state, bankDetails: payload}

        case VERIFY_BANK_FAILED:
            return { ...state, error: payload }

        default: return state
    }
  }