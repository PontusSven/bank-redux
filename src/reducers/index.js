import { combineReducers } from "redux";

const balanceReducer = (balance = 100, action ) => {
   switch (action.type) {
       case 'DEPOSIT':
           return balance + action.payload.amount;
       case 'WITHDRAW':
           return balance - action.payload.amount;
       default:
           return balance;
   }
}

const historyReducer = (history = [], action) => {
    switch (action.type) {
        case 'DEPOSIT' :
            return [...history, action.payload];
        case 'WITHDRAW':
            return [...history, action.payload];
        default:
            return history;
    }
}

export default combineReducers({
    balance: balanceReducer,
    history: historyReducer
})

