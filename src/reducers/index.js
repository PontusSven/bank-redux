import { combineReducers } from "redux";

import historyReducer from "./historyReducer";
import balanceReducer from "./balanceReducer";

export default combineReducers({
    balance: balanceReducer,
    history: historyReducer
})

