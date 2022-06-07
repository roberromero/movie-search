import React from 'react'


const User = ({ data }) => {
    // data.filter(elem=> elem.)
    // const handleDelete = () => {

    // }
    return (
        
         <section>
          <h2 className='title'>MY MOVIES</h2>
          {data.map(elem=>{
            return  <div className="card-container" key={elem.imdbID}>
                      <img className="card-container__img" src={elem.Poster} alt={`Cover of the film ${elem.Title}`} />
                      <div className='card-container__info'>
                        {elem.Title}<br/>
                        {elem.Year}
                      </div>
                    </div>
          })
          }
        </section>
       
    )
}

export default User
