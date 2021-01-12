export const Deposit = (amount) =>  {
    return {
        type: 'DEPOSIT',
        payload: {
            name: 'Deposit',
            amount
        }
    }
}

export const Withdraw = (amount) => {
    return {
        type: 'WITHDRAW',
        payload: {
            name: 'Withdraw',
            amount
        }
    }
}

