import React, { useState } from "react";
import { connect } from "react-redux";

import { deposit, withdraw } from "../actions";

const UserInput = ({ deposit, withdraw }) => {
    const [amount, setAmount] = useState(0)

    return <div>
        <input onChange={e => setAmount(e.target.value) } type="number"/>
        <button onClick={() => deposit(parseInt(amount))}>Deposit</button>
        <button onClick={() => withdraw(parseInt(amount))} >Withdraw</button>
     </div>

    }

    const mapStateToProps = state => {
        return { balance: state.balance }
    }

export default connect(mapStateToProps,{ deposit, withdraw })(UserInput);