
import React from 'react'
import { MdSearch } from 'react-icons/md'
import SearchIcon from "@mui/icons-material/Search"
import "./search.css"
const Search = ({placeholder}) => {
  return (
    <div className='search-container'>
        <MdSearch/>
        <input type='text'
        // icon={<SearchIcon/>}
        placeholder={placeholder}
        className='search-input'/>
    </div>
  )
}

export default Search