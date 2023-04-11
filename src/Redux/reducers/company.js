import { DEALS_STORE_SUCCESS, PEOPLE_STORE_DATA_SUCCESS } from "../constants/company";

const initialValues = {
    peopleData: [],
    deals: []
}
export const storeCompanyData = (state = initialValues, action) => {
    const { type, payload } = action;
    switch (type) {
        case PEOPLE_STORE_DATA_SUCCESS: return { ...state, peopleData: payload }
        case DEALS_STORE_SUCCESS: return { ...state, deals: payload }
        default: return state
    }
}