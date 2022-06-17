import React from 'react'

export default function Product({product})
{
    return (
        <div>
            <label>
                {product.id}
                {product.name}
                {product.price}
            </label>
        </div>
    )
}