import React from "react"
import { connect } from "react-redux";
import {render} from "@testing-library/react";

const AccountHistory = ({ history }) => {

    function renderList() {
        return history.map(item => {
            return <div className="history-items">
                <h6>{item.type}</h6>
                <h6>{item.amount}</h6>
            </div>
        })
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