import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userDataReducer } from "./reducers/auth"
import { verifyPanReducer } from "./reducers/verifyKycReducer"

const rootReducer = combineReducers({

    loginData : userDataReducer,
    panData : verifyPanReducer

})


const intialValue = {}

const store = createStore(
  rootReducer,
  intialValue,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
