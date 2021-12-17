import React from 'react'
import './ImageBox.css'

function ImageBox(props) {
    return (
        <div className="image-box">
            <h3>{props.name}</h3>
        </div>
    )
}

export default ImageBox
