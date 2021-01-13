/*
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

*/
const historyReducer = (history = [], action) => {
    return [
        {
            type: 'Deposit',
            amount: 25
        },
        {
            type: 'Withdraw',
            amount: 50
        },
        {
            type: 'Withdraw',
            amount: 20
        }
    ]
}

export default historyReducer;