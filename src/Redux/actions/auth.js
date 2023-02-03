import { LOGIN_SUCCESS , LOGIN_REQUEST , LOGIN_FAILED } from "../constants/LoginConstants"

export const userLoginAction = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        dispatch({ type: LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LOGIN_FAILED, payload: error })
    }
}
