import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userDataReducer } from "./reducers/auth"
import { userEmailReducer } from "./reducers/auth";
import { storeKycDetailsReducer } from "./reducers/verifyKycReducer";
import { editKycDetailsReducer } from "./reducers/verifyKycReducer";
import { storeFounderSignUpData } from "./reducers/FounderSignUp";
import { storeCompanyData } from "./reducers/company";

const rootReducer = combineReducers({

  loginData: userDataReducer,
  userInfo: userEmailReducer,
  kycData: storeKycDetailsReducer,
  editKycData: editKycDetailsReducer,
  founderSignUpData: storeFounderSignUpData,
  companyData: storeCompanyData

})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['userInfo', 'loginData', 'kycData', 'editKycData']
}
const pReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export { store, persistor }