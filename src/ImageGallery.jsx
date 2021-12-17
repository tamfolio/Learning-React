import React from 'react'
import ImageBox from './ImageBox'
import './ImageGallery.css'

function ImageGallery() {
    return (
        <div className='Image-Gallery'>
            <div className="Image-Container">
                <ImageBox name="Germany"/>
                <ImageBox name="egypt"/>
                <ImageBox name="Britain"/>
                <ImageBox name="Nigeria"/>
                <ImageBox name="Poland"/>
                <ImageBox name="Wales"/>
                <ImageBox name="Sudan"/>
                <ImageBox name="Italy"/>
                
            </div>
        </div>
    )
}

export default ImageGallery
