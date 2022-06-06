import React from "react";
import add from "./img/add.png";


const Home = ({ movies, handleClick }) => {
  

  return (
     
    <section>
        {movies.map((elem, index)=> {
     return (
              <div className="card-container" key={index} >
                  <img className='card-container__add' src={add} onClick={()=>handleClick(elem)} alt='add icon'/>
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
