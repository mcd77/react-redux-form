import { applyMiddleware } from "redux"
import { legacy_createStore as createStore } from 'redux';
import reducers from "./reducers/index"
import thunk from "redux-thunk"
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

