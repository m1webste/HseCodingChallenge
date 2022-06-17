import React, {useState} from 'react'
import axios from 'axios'
import { WsApiConstants } from '../constants'

export default function ProductForm() {

    const [name, setName] = useState("")
    const [categoryName, setCategoryName] = useState("")
    const [price, setPrice] = useState(0)

    function nameChangeHandler(event) {
        setName(event.target.value);
    }

    function categoryChangeHandler(event) {
        setCategoryName(event.target.value);
    }

    function priceChangeHandler(event) {
        setPrice(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(`Attempting to add {name:${name}, categorName:${categoryName}, price:${price}} to the AWS DB`)

        axios.post(WsApiConstants.BASE_WS_URL + WsApiConstants.PRODUCT_INSERT_URL, this.state)
        .then(response => {
            console.log(response)
            alert(`Product {name:${name}, categoryName:${categoryName}, price:${price}} was submitted to the datebase.`)
        })
        .catch(error =>{
            console.log(error)
            alert(`Error while submitting {name:${name}, categoryName:${categoryName}, price:${price}} to the datebase.`)
        })      
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={nameChangeHandler} />
            </div>
            <div>
                <label>Category Name</label>
                <input type="text" name="categoryName" value={categoryName} onChange={categoryChangeHandler} />
            </div>
            <div>
                <label>Price</label>
                <input type="text" name="price" value={price} onChange={priceChangeHandler} />
            </div>
            <button>Add Product</button>
        </form>
    )
}