import React from "react";
import { connect } from "react-redux";

import { deposit, withdraw } from "../actions";

class UserInput extends React.Component {
    state = { amount: 0 }

    render() {
        console.log(this.state.amount)
        return <div>
            <input onChange={e => this.setState({ amount: e.target.value }) } type="number"/>
            <button onClick={() => this.props.deposit(parseInt(this.state.amount))}>Deposit</button>
            <button onClick={() => this.props.withdraw(parseInt(this.state.amount))} >Withdraw</button>
            <h1>{this.state.amount}</h1>
         </div>
        }
    }

export default connect(null,{ deposit, withdraw })(UserInput);