import React, {useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

const SearchBar = (props) => {

    const {options, onInputChange} = props;
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

    return(
        <div className="search-bar-dropdown">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search here for a product..."
                onChange={onInputChange}
                ref={inputRef}
            />
            <ul className="list-group"
                ref={ulRef}
            >
                {options.map(option => {
                    return (
                        <button 
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

export default SearchBar