import React from 'react'
import add from "./img/add.png";

const Home = ({ movies, handleClick }) => {
 

  return (
      //RECORRE DOS VECES, AUNQUE SOLO PINTA UNA VEZ
    <section>
        {movies.map((elem, index)=> {
     return (
              <div className="card-container" key={index} onClick={()=>handleClick(elem)}>
                  <img className='card-container__add' src={add} alt='add icon'/>
                  <img className="card-container__img" src={elem.Poster} alt={`Cover of the film ${elem.Title}`}/>
                  <div className='card-container__info'>
                    {elem.Title}<br/>
                    {elem.Year}
                  </div>
              </div>
            )
        })}
       
    </section>
    
  )
}

export default Home
