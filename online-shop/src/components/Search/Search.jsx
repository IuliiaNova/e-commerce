import React from 'react';
import "./Search.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export const Search = ({ onSearch }) => {

    const [searchItem, setSearchItem] = useState('');
    
    function userSearch(e) {
        e.preventDefault();
        onSearch(searchItem);
      }
  
    return (
        <form onSubmit={userSearch}>
        <div className="input-with-icon">
        <input type="text" className="search-input" placeholder="Search" value={searchItem} 
          onChange={e => setSearchItem(e.target.value)}/> 
        <span className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        </div>
        </form>
    )
}
export default Search;