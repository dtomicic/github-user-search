import React from 'react'

const Search = ({search}) => {
  return (
    <div className='searchBar'>
        <input type="text" className='searchBar__input' placeholder='Search Github Username' onInput={search}/>
        <button type='submit' className='searchBar__submit'>Search</button>
    </div>
  )
}

export default Search