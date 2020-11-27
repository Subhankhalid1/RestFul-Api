import React from 'react'


const SearchBar=(props)=>{
    return(
        <>
        <input value={props.value} style={{width:"360px", margin:"1%"}}
         onChange={(event)=>props.setSearchValue(event.target.value)}
          placeholder="Type to search">

          </input>
        </>
    )
}

export default SearchBar;