import React, { useState } from 'react'
import ShowChosenMovies from "./ShowChosenMovies"

const Card = ({ movies }) => {
  const [data, updateData] = useState([]);

  const handleClick = (elem)=> {
    updateData(oldArray=> [...oldArray, elem]);
    console.log(data);
  }

  return (
      
    <>
        {movies.map(elem=> {
     return <>
              <div className="card-container" key={elem.imdbID} id={elem.imdbID} onClick={()=>handleClick(elem)}>
                  <h2 className="card-container__title">{elem.Title}</h2>
                  <img className="card-container__img" src={elem.Poster} />
                  <h3 className="card-container__year">{elem.Year}</h3>
              </div>
            </>
        })}
        {<ShowChosenMovies data={data}/>}
       
    </>
    
  )
}

export default Card
