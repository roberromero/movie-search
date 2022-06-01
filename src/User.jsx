import React from 'react'

const User = ({ data }) => {
    console.log(data);
    return (
        <section>
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
        </section>
    )
}

export default User
