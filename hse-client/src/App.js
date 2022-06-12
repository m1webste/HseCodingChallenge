import React, {useState, useRef} from 'react'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const productIdRef = useRef(0) 
  const productNameRef = useRef(1) 
  const productCategoryRef = useRef(2) 
  const productPriceRef = useRef(3) 

  function handleAddProduct(e){
    const id_in = productIdRef.current.value
    const name = productIdRef.current.value
    const category = productIdRef.current.value
    const price = productIdRef.current.value

    if (id_in === '' || name === '' || category === '' || price === '') return 

    setProducts(prevProducts => {
      return [...prevProducts, {id:id_in, name:name, category:category, price:price}]
    })

    productIdRef.current.value = null
    productNameRef.current.value = null
    productCategoryRef.current.value = null
    productPriceRef.current.value = null
  }

  return (
    <>
      <ProductForm></ProductForm>
      <SearchBar></SearchBar>
      <ProductList></ProductList>
    </>
  );
}

export default App;
