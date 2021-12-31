import React from 'react'

class Conditional extends React.Component {

    constructor() {
        super();
        this.state= {
            isLoggedIn:false
    }
    this.handleClick=this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    render() {
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Currently Logged in" : "Currently Logged Out"
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <p>{displayText}</p>
            </div>
        )
    }
}

export default Conditional
