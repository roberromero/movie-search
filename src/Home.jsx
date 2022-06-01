import React, { useState } from 'react'
import add from "./img/add.png";

const Home = ({ movies, handleClick }) => {
 

  return (
      
    <section>
        {movies.map(elem=> {
     return <>
              <div className="card-container" key={elem.imdbID} onClick={()=>handleClick(elem)}>
                  <img className='card-container__add' src={add}/>
                  <img className="card-container__img" src={elem.Poster} />
                  <div className='card-container__info'>
                    {elem.Title}<br/>
                    {elem.Year}
                  </div>
              </div>
            </>
        })}
        {/* {<ShowChosenMovies data={data}/>} */}
       
    </section>
    
  )
}

export default Home
