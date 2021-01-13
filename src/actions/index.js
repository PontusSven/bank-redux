export const deposit = (amount) =>  {
    return {
        type: 'DEPOSIT',
        payload: {
            name: 'Deposit',
            amount
        }
    }
}

export const withdraw = (amount) => {
    return {
        type: 'WITHDRAW',
        payload: {
            name: 'Withdraw',
            amount
        }
    }
}

