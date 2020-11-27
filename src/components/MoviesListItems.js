import React from 'react'
import './MoviesListFav.css'
const MoviesListItems = (props) => {
  
  return (

    <div>

      {props.movies.map((movie, ind) => (
        <div className="Container" style={{margin:"3%", padding:"20px"}} key={ind} >
        
          <h4 style={{color:"chartreuse"}}>{movie.Title}</h4>
          
          <img src={movie.Poster} alt='movie' style={{ border:"4px, solid", boxShadow:"5px 10px red", padding:"10px"}}/>
          {/* <div className='overlay d-flex align-items-center justify-content-center'>
						Add to Favourites
					</div> */}
          <br/> <br/>
        </div>
      ))}
    </div>
  )
}

export default MoviesListItems;
