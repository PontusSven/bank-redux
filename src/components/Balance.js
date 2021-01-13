import React from "react";
import { connect } from "react-redux"

const Balance = ({ balance }) => {
    return <div>
        <h3>Balance:</h3>
        <h4>{ balance }$</h4>
    </div>
}

const mapStateToProps = state => {
    console.log(state)
    return { balance: state.balance }
}
export default connect(mapStateToProps)(Balance);