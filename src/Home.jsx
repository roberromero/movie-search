import React from "react";
import add from "./img/add.png";


const Home = ({ movies, handleClick }) => {
  
  console.log(movies);
  return (
     <>
     <h2 className='title'>HOME</h2>
    <section>
        {movies.map((elem, index)=> {
     return (
              <div className="card-container" key={index} >
                  <img className='card-container__add-edit' src={add} onClick={()=>handleClick(elem)} alt='add icon'/>
                  <img className="card-container__img" src={elem.Poster} alt={`Cover of the film ${elem.Title}`}/>
                  <div className='card-container__info'>
                    {elem.Title}<br/>
                    {elem.Year}
                  </div>
              </div>
              
            )
        })}
    </section>
    </>
  )
}

export default Home
