import { PEOPLE_STORE_DATA_SUCCESS } from "../constants/company";

export const peopleDataStoreAction = (DATA) => (dispatch) => {
    dispatch({ type: PEOPLE_STORE_DATA_SUCCESS, payload: DATA });
};
