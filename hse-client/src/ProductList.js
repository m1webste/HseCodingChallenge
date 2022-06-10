import React from 'react'
import Product from './Product'

export default function ProductList({products}){
    return (
        products.map(product => {
            return <Product key={product.id} product={product}/>
        })
    )
}