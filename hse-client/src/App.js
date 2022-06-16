import React, {useState, useEffect} from 'react'
import ProductForm from './view/ProductForm'
import SearchBar from './view/SearchBar'
import ProductList from './model/ProductList'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

    const [allProducts, setAllProducts] = useState([])
    const [availableSearchBarOptions, setAvailableSearchBarOptions] = useState([])

    useEffect(() => {
      refreshAllProducts();
    }, []);

    function refreshAllProducts(){
      //axios.get('http://ec2-54-93-231-12.eu-central-1.compute.amazonaws.com:8080/products')
      axios.get('http://localhost:8080/products')
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
  
    return (
      <>
        <SearchBar options={availableSearchBarOptions} onInputChange={searchBarInputChangeHandler} />
      </>
    );
}

export default App;
