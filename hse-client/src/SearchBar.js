import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class SearchBar extends Component {

    render(){
        return(
            <div class="search-bar-dropdown">
                <div class="input-group-append">
                    <input type="text" class="form-control" placeholder="Search here for a product..."/>
                </div>
            </div>
        )
    }
}

export default SearchBar