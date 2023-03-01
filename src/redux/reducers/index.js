import { combineReducers } from "redux"
import formReducer from "./formReducer";

const reducers = combineReducers({
    form: formReducer
})

export default reducers;