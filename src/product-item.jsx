import React from 'react'

function ProductItem(props) {
    return (
        <div className="product-container">
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
    </div>
    )
}

export default ProductItem
