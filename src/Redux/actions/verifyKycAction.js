import {
  VERIFY_PAN_REQUEST,
  VERIFY_PAN_SUCCESS,
  VERIFY_PAN_FAILED,
  VERIFY_BANK_FAILED,
  VERIFY_BANK_REQUEST,
  VERIFY_BANK_SUCCESS,
  STORE_KYC_REQUEST,
  STORE_KYC_SUCCESS,
  STORE_KYC_FAIL
} from "../constants/verifyKycConstant"

import InvestorKyc from '../../service/investor.kyc';

export const verifyPanKycAction = (pan_card) => (dispatch) => {
  return InvestorKyc.VerifyKycPan(pan_card).then(
    (response) => {

      // const errornew = response.response.data.message;
      console.log(response)
      if (response !== 'PAN number is not valid') {
        dispatch({ type: VERIFY_PAN_REQUEST });
        dispatch({ type: VERIFY_PAN_SUCCESS, payload: response });
      }
      else {
        dispatch({ type: VERIFY_PAN_FAILED, payload: response })
      }
      return Promise.resolve();
    }
  )
};

export const verifyBankKycAction = (account_number, ifsc_code, name) => (dispatch) => {
  return InvestorKyc.VerifyKycBank(account_number, ifsc_code, name).then(
    (response) => {

      // const errornew = response.response.data.message;
      console.log(response)
      if (response !== "Bank Account Details can't be Verified!!") {
        dispatch({ type: VERIFY_BANK_REQUEST });
        dispatch({ type: VERIFY_BANK_SUCCESS, payload: response });
      }
      else {
        dispatch({ type: VERIFY_BANK_FAILED, payload: response })
      }
      return Promise.resolve();
    }
  )
};


export const storeKycDetailsAction = (kycData) => (dispatch) => {
  try {
    dispatch({ type: STORE_KYC_REQUEST });
    dispatch({ type: STORE_KYC_SUCCESS, payload: kycData });
    return;
  } catch (error) {
    dispatch({ type: STORE_KYC_FAIL })
    return;
  }
};
