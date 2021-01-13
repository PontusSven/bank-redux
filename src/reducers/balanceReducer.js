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

export default balanceReducer;


