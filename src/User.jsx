import React, { useState } from 'react'


const User = ({ data }) => {

    const [dataUpdate, setDataUpdate] = useState([...data]);
    console.log(dataUpdate);

    const handleBorrar = (id) => {
        setDataUpdate( dataUpdate.filter(elem=> elem.imdbID != id) );
    }
    return (
        
         <section>
          <h2 className='title'>MY MOVIES</h2>
          {dataUpdate.map(elem=>{
            return  <div className="card-container" key={elem.imdbID}>
                      <img className="card-container__img" src={elem.Poster} alt={`Cover of the film ${elem.Title}`} />
                      <div className='card-container__info'>
                        {elem.Title}<br/>
                        {elem.Year}
                      </div>
                      <button onClick={()=>handleBorrar(elem.imdbID)}>Borrar</button>
                    </div>
          })
          }
        </section>
       
    )
}

export default User
