import { DEALS_STORE_SUCCESS, PEOPLE_STORE_DATA_SUCCESS } from "../constants/company";

export const peopleDataStoreAction = (DATA) => (dispatch) => {
    dispatch({ type: PEOPLE_STORE_DATA_SUCCESS, payload: DATA });
};

export const dealsStoreAction = (DATA) => (dispatch) => {
    dispatch({ type: DEALS_STORE_SUCCESS, payload: DATA });
};
