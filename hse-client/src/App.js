import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./BookData.json";
import ProductData from "./ProductData.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Product Name..." data={ProductData} />
    </div>
  );
}

export default App;
