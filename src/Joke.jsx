import React from 'react'
import JokeBox from './JokeBox'

import JokesData from './JokesData'

function Joke() {
    const jokesComponent = JokesData.map(joke => <JokeBox 
    key={joke.id} question = {joke.question} punchline = {joke.punchline}
    />
        )
    return (
        
        <div>
            <div className="joke-box">
                {jokesComponent}
            </div>
        </div>
    )
}

export default Joke
