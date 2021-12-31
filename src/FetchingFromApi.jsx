import React, { Component } from 'react'

class FetchingFromApi extends Component {

    constructor() {
        super();
        this.state={
            isLoading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})
        fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                isLoading: false,
                character: data 
            })
        }
        )}

    
    render() {
        const text = this.state.isLoading ? "loading..." : this.state.character.name
        return (
            <div>

            <p>{text}</p>
            </div>
        )
    }
}

export default FetchingFromApi
