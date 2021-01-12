import React from "react";

import Balance from "../Balance"
import AccountHistory from "../AccountHistory";
import UserInput from "../UserInput";
import "./App.css"

const App = () => {
    return <div className="wrapper">
        <h1>BANK OF AMERICA</h1>
        <div className="container">
            <div>
                <Balance />
            </div>
            <div>
                <AccountHistory />
            </div>
        </div>
        <div className="user-input">
            <UserInput />
        </div>
    </div>
}

export default App;