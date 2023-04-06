import { PEOPLE_STORE_DATA_SUCCESS } from "../constants/company";

const initialValues = {
    peopleData: []
}
export const storeCompanyData = (state = initialValues, action) => {
    const { type, payload } = action;
    switch (type) {
        case PEOPLE_STORE_DATA_SUCCESS: return { ...state, peopleData: payload }
        default: return state
    }
}