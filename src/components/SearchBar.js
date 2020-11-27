import React from 'react'


const SearchBar=(props)=>{
    return(
        <>
        <input value={props.value}
         onChange={(event)=>props.setSearchValue(event.target.value)}
          placeholder="Type to search">

          </input>
        </>
    )
}

export default SearchBar;