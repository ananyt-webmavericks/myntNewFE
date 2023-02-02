import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({

})


const intialValue = {key:0}

const store = createStore(
  rootReducer,
  intialValue,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
