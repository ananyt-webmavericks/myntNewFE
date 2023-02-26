import { LOGIN_SUCCESS , LOGIN_REQUEST , LOGIN_FAILED  , USER_EMAIL_SUCCESS , USER_EMAIL_FAILED , USER_EMAIL_REQUEST} from "../constants/LoginConstants"

export const userLoginAction = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        dispatch({ type: LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LOGIN_FAILED, payload: error })
    }
}

export const userEmailAction = (data) => async(dispatch)=>{
    try{
        dispatch({type: USER_EMAIL_REQUEST})
        dispatch({type: USER_EMAIL_SUCCESS, payload: data })
    } catch(error){
        dispatch({type: USER_EMAIL_FAILED , payload :error})
    }
}
