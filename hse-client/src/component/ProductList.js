import React, {useEffect} from 'react'

export default function ProductList(props){

    useEffect(() => {
        console.log(`products in ProductList: ${props.products.length}`)
    });

    return(
        <div className="product-list">
            {
                props.products.length ?
                props.products.map(p => 
                <div className="product-list-table" key={p.id}>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID: </td>
                                <td>{p.id}</td>
                            </tr>
                            <tr>
                                <td>Name: </td>
                                <td>{p.name}</td>
                            </tr>
                            <tr>
                                <td>Price: </td>
                                <td>{p.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                ) :
                `No Products To Display`
            }
        </div>
    )
}