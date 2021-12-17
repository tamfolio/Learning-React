import React from 'react'
import ProductItem from './product-item'
import ProductData from './ProductData'

function Products() {
    const ProductComponent = ProductData.map(products => 
        <ProductItem key={products.id} name ={products.name} price={products.price} description = {products.description}/>
        )
    return (
        <div>
          {ProductComponent}
        </div>
    )
}

export default Products
