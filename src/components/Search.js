import React from 'react'
import magnifier from "../assets/icon-search.svg"

const Search = () => {
  return (
    <div className='search'>
        <img src={magnifier}></img>
        <input className='search__input' placeholder='Search for movies or TV series'></input>
    </div>
  )
}

export default Search