import React from 'react'

function JokeBox(props) {
    return (
        <div>
            <div className="jokes">
                    <h3>{props.question}</h3>
                    <p>{props.punchline}</p>
            </div>
        </div>
    )
}

export default JokeBox
