import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { WsApiConstants } from '../constants';
import SearchBar from '../component/SearchBar'
import ProductList from '../component/ProductList';

export default function SearchPage() {

    const [allProducts, setAllProducts] = useState([])
    const [availableSearchBarOptions, setAvailableSearchBarOptions] = useState([])
    const [selectedProducts, setSelectedProducts] = useState([])

    useEffect(() => {
        refreshAllProducts();
    }, []);

    function refreshAllProducts(){
    axios.get(WsApiConstants.BASE_WS_URL + WsApiConstants.ALL_PRODUCTS_URL)
    .then(response => {
        console.log(response.data)
        setAllProducts(response.data);
    })
    .catch(error =>{
        console.log(error)
    })    
    }

    function searchBarInputChangeHandler(event){
        if(event.target.value === ""){
            setAvailableSearchBarOptions([])
        }
        else{
            const newOptions = allProducts.filter(option => option.name.includes(event.target.value))
            setAvailableSearchBarOptions(newOptions)
        }
    }

    function searchClickHandler(inputRefValue){
        console.log(`input ref`+ inputRefValue)
        const filteredProducts = allProducts.filter(option => option.name === inputRefValue)
        setSelectedProducts(filteredProducts)
        console.log(`selectedProducts`+ selectedProducts)
    }

    return (
        <>
            <SearchBar options={availableSearchBarOptions} onInputChange={searchBarInputChangeHandler} onSearch={searchClickHandler}/>
            <ProductList products={selectedProducts}></ProductList>
        </>
    );
}