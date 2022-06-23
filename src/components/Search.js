import React, { useEffect, useState } from 'react'
import magnifier from "../assets/icon-search.svg"
import { useGlobalContext } from '../context'

const Search = () => {

  const {query, setQuery} = useGlobalContext()

  console.log(query)


  return (
    <form className='search' onSubmit={(e)=> e.preventDefault()}>
        <img src={magnifier}></img>
        <input className='search__input' placeholder='Search for movies or TV series' value={query} onChange={(e)=> setQuery(e.target.value)}/>
    </form>
  )
}

export default Search