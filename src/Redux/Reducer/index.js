import { combineReducers } from "redux";
import { defaultReducer } from "./AllReducer";

const reducer = combineReducers({
    allProduct: defaultReducer,
})

export default reducer;