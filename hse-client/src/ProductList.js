import React, {Component, useState, useRef} from 'react'
import Product from './Product'
import axios from 'axios'

class ProductList extends Component {

    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }

    doGetRequest()
    {
        axios.get('http://ec2-54-93-231-12.eu-central-1.compute.amazonaws.com:8080/product')
        .then(response => {
            console.log(response.data)
            this.setState({products: response.data})
        })
        .catch(error =>{
            console.log(error)
        })    
    }

    componentDidMount(){
        this.doGetRequest()
    }

    findAllProducts = e => {
        e.preventDefault()
        console.log(`Attempting to retrieve all products from the AWS DB`)
        this.doGetRequest()
    }

    render(){
        const {products} = this.state
        console.log(`state in render: ${this.state.products}`)
        return(
            <>
                <div>
                    <button onClick={this.findAllProducts}>Display All Products</button>
                    
                </div>
                <div>
                    List of Products:
                    {
                        products.length ?
                        products.map(p => <div key={p.id}>{p.name}</div>) :
                        ` No Products Available`
                    }
                </div>
            </>
        )
    }
}

export default ProductList