import React, { useState } from 'react'

const Card = ({ movies }) => {
    const[test, setTest] = useState(0);
    const handleMouseOver = (e) => {
        setTest(test+1);
    }
  return (
      
    <>
        {movies.map(elem=> {
     return <div className="card-container" key={elem.imdbID}>
                <h2 className="card-container__title">{elem.Title}</h2>
                <img className="card-container__img" src={elem.Poster} onMouseOver={handleMouseOver}/>
                <h3 className="card-container__year">{elem.Year}</h3>
            </div>
        })}
        <p>{test}</p>
    
    </>
    
  )
}

export default Card
