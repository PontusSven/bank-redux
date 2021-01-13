import React from "react"
import { connect } from "react-redux";

import "./AccountHistory.css"

const AccountHistory = ({ history }) => {
    function renderList() {
        return history.map(item => {
            return <div className="history-items" key={item.amount}>
                <h5>{item.name }</h5>
                <h5>{item.amount }$</h5>
            </div>
        })
    }

    if (history.length === 0) {
        return <div>
            <h3>History</h3>
            <h5>No history available</h5>
            </div>
    }

    return <div>
        <h3>History</h3>
        <div>{renderList()}</div>
    </div>
}

const mapStateToProps = state => {
    return { history: state.history }
}

export default connect(mapStateToProps)(AccountHistory);