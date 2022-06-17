import React, {useState, useEffect} from 'react'
import SearchBar from '../component/SearchBar'
import axios from 'axios'
import { WsApiConstants } from '../constants';
import ProductList from '../component/ProductList';

export default function SearchPage() {

    const [allProducts, setAllProducts] = useState([])
    const [availableSearchBarOptions, setAvailableSearchBarOptions] = useState([])

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

    function searchClickHandler(inputRef){

    }

    return (
        <>
            <SearchBar options={availableSearchBarOptions} onInputChange={searchBarInputChangeHandler} onSearch={searchClickHandler}/>
            <ProductList></ProductList>
        </>
    );
}