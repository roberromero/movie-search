import React, { useState } from 'react'
import ShowChosenMovies from "./ShowChosenMovies"
import add from "./img/add.png";

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
       
    </>
    
  )
}

export default Card
