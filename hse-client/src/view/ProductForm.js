import React, { Component } from 'react'
import axios from 'axios'

class ProductForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            categoryId:'',
            price:''
        }
    }

    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(`Attempting to add ${this.state} to the AWS DB`)
        axios.post('http://ec2-54-93-231-12.eu-central-1.compute.amazonaws.com:8080/product', this.state)
        .then(response => {
            console.log(response)
            alert(`Product {name:${this.state.name}, categoryId:${this.state.categoryId}, price:${this.state.price}} was submitted to the datebase.`)
        })
        .catch(error =>{
            console.log(error)
            alert(`Error while submitting {name:${this.state.name}, categoryId:${this.state.categoryId}, price:${this.state.price}} to the datebase.`)
        })      
    }

    render(){
        const {name, categoryId, price} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={this.inputChangeHandler} />
                </div>
                <div>
                    <label>Category ID</label>
                    <input type="text" name="categoryId" value={categoryId} onChange={this.inputChangeHandler} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" name="price" value={price} onChange={this.inputChangeHandler} />
                </div>
                <button>Add Product</button>
            </form>
        )
    }
}

export default ProductForm