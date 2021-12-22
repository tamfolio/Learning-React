import React from "react";

class ChangingState extends React.Component {
    constructor() {
        super()
        this.state= {
            count: 0
        }
        this.handleIncrease = this.handleIncrease.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)
    }

    handleIncrease() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleDecrease() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleDecrease}>Decrease</button>
            </div>
        )
    }
}

export default ChangingState
