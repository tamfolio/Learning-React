import React from 'react'
import Image from './assets/images/usa.png';

function iWasClicked() {
    console.log('I was Clicked')
}

function HandlingEvents() {
    return (
        <div>
            <img onMouseOver={() => console.log('All Hail Usa')} src={Image} alt="" />
            <br/>
            <br/>
            <button onClick={iWasClicked} >Click me</button>
        </div>
    )
}

export default HandlingEvents
