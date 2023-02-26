import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userDataReducer } from "./reducers/auth"
import { verifyPanReducer } from "./reducers/verifyKycReducer";
import { userEmailReducer } from "./reducers/auth";

const rootReducer = combineReducers({

    loginData : userDataReducer,
    panData : verifyPanReducer,
})

const persistConfig = {
  key: 'root',
  version:1,
  storage,
  whitelist:['userMail' , 'loginData']
}
const pReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export { store , persistor}
