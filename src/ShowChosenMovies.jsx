import React from 'react'

const ShowChosenMovies = ({ data }) => {
    console.log(data);
    return (
        <div className='flex'>
          
          {data.map(elem=>{
            return  <div className="card-container" key={elem.Title}>
                      <img className="card-container__img" src={elem.Poster} />
                      <div className='card-container__info'>
                        {elem.Title}<br/>
                        {elem.Year}
                      </div>
                    </div>
                   
          })
          }
        </div>
     
    )
  
}

export default ShowChosenMovies
