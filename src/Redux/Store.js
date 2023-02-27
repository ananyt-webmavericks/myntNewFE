import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userDataReducer } from "./reducers/auth"
import { userEmailReducer } from "./reducers/auth";

const rootReducer = combineReducers({

    loginData : userDataReducer,
    userInfo : userEmailReducer
})

const persistConfig = {
  key: 'root',
  version:1,
  storage,
  whitelist:['userInfo' , 'loginData']
}
const pReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export { store , persistor}
