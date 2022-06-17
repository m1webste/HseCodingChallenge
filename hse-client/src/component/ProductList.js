import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function ProductList(){

    const [products, setProducts] = useState([])

    useEffect(() => {
        refreshProductList()
    }, []);

    function findAllProducts(event){
        event.preventDefault()
        console.log(`Attempting to retrieve all products from the AWS DB`)
        this.refreshProductList()
    }

    function refreshProductList(){
        axios.get('http://ec2-54-93-231-12.eu-central-1.compute.amazonaws.com:8080/product/all')
        .then(response => {
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(error =>{
            console.log(error)
        })    
    }

    return(
        <>
            <div>
                <button onClick={findAllProducts}>Display All Products</button>
                
            </div>
            <div>
                {
                    products.length ?
                    products.map(p => <div key={p.id}>{p.name}</div>) :
                    `No Products Available`
                }
            </div>
        </>
    )
}