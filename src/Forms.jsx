import React, { Component } from 'react'

class Forms extends Component {
    constructor() {
        super()
        this.state= {
            firstName: '',
            lastName: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <input
                 type="text"
                  name='firstName'
                  value={this.state.firstName}
                   placeholder='First Name' 
                    onChange={this.handleChange}/>
                <input
                 type="text"
                  name='lastName'
                  placeholder='Last Name'
                  value={this.state.lastName}
                  onChange={this.handleChange}/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default Forms
