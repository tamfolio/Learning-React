import React from "react";

class StatePractice2 extends React.Component {
    constructor() {
        super()
        this.state={
            isLoggedIn: true
        }
    }
    render() {
        let wordDisplay
        if(this.state.isLoggedIn === true) {
            wordDisplay = 'in'
        } else {
            wordDisplay = 'out'
        }
        return (
            <div>
                <h1>You are currently Logged {wordDisplay }</h1>
            </div>
        )
    }
}

export default StatePractice2;