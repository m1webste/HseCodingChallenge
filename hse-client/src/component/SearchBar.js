import React, {useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

export default function SearchBar(props) {

    const {options, onInputChange, onSearch} = props;
    const inputRef = useRef();
    const ulRef = useRef();
    
    useEffect(() => {
        inputRef.current.addEventListener('click', (event)=>{
            event.stopPropagation();
            ulRef.current.style.display = 'flex';
            onInputChange(event);
        })
        document.addEventListener('click', (event)=>{
            ulRef.current.style.display = 'none';
        })
    }, []);

    function onSearchButtonClick(event){
        onSearch(inputRef.current.value);
    }

    return(
        <div className="search-bar-dropdown">

            <div className="seach-bar-with-button">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search here for a product..."
                onChange={onInputChange}
                ref={inputRef}
            />
            <button type="button" onClick={onSearchButtonClick}>Search</button>
            </div>

            <ul className="list-group"
                ref={ulRef}
            >
                {options.map(option => {
                    return (
                        <button 
                            key={option.id}
                            type="button" 
                            className="list-group-item list-group-item-action"
                            onClick={
                                (e) => inputRef.current.value = option.name
                            }
                        >
                            {option.name}
                        </button>
                    );
                })}
            </ul>
        </div>
    )
}