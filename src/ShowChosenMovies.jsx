import React from 'react'

const ShowChosenMovies = ({ data }) => {
    console.log(data);
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

export default ShowChosenMovies
