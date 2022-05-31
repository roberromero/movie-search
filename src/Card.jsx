import React, { useState } from 'react'

const Card = ({ movies, api }) => {
  // const API_URL = 'http://www.omdbapi.com/?apikey=19fe2539';
  const [data, updateData] = useState([]);

  const handleClick = (elem)=> {
    // const id= e.target.parentElement.id;
    console.log(elem);
    // updateChosenMoviesId(oldArray=> [...oldArray, id]);
    updateData(elem);
  }

  // // THIS FUNCTION SEARCH BY ID
  // const addFavouriteMovies = async (id) => {
  //   const response = await fetch(`${api}&i=${id}`);
  //   const newData = await response.json();
  //   updateData(oldData => [...oldData, newData]);
  // }

const showChosenMovies = () =>{
  return (
      <div className='flex'>
        
        {data.map(elem=>{
          return <div className="card-container" id={elem.Title} key={elem.Title}>
                    <h2 className="card-container__title">{elem.Title}</h2>
                    <img className="card-container__img" src={elem.Poster} />
                    <h3 className="card-container__year">{elem.Year}</h3>
                 </div>
                 
        })
        }
      </div>
   
  )
}
// --------------------------------------------------------------------------------------------------------------------------------
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
        {/* {showChosenMovies()} */}
       
    </>
    
  )
}

export default Card
