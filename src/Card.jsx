import React, { useState } from 'react'

const Card = ({ movies }) => {
  const API_URL = 'http://www.omdbapi.com/?apikey=19fe2539';
  // const [chosenMoviesId, updateChosenMoviesId] = useState([]); 
  const [data, updateData] = useState([]);
  const handleClick = (e)=> {
    const id= e.target.parentElement.id;
    // updateChosenMoviesId(oldArray=> [...oldArray, id]);
    searchFavouriteMovies(id);
  }


  // THIS FUNCTION SEARCH BY ID
  const searchFavouriteMovies = async (id) => {
    console.log(`searchFavMovies id es: ${id}`);
    const response = await fetch(`${API_URL}&i=${id}`);
    const newData = await response.json();
    updateData(oldData => [...oldData, newData]);
  }
//La constante "data" es un array de objetos
const showChosenMovies = () =>{
  return (
      <div>
        {data.length >0 ? <p>{data[0].Title}</p> : <p>No movies in your list</p>}
      </div>
   
  )
}

  return (
      
    <>
        {movies.map(elem=> {
     return <div className="card-container" key={elem.imdbID} id={elem.imdbID} onClick={handleClick}>
                <h2 className="card-container__title">{elem.Title}</h2>
                <img className="card-container__img" src={elem.Poster} />
                <h3 className="card-container__year">{elem.Year}</h3>
            </div>
        })}
        <div>{showChosenMovies()}</div>
    </>
    
  )
}

export default Card
