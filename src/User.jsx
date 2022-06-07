import React from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const User = ({ data }) => {
    const navigate = useNavigate();
    if(data.length == 0){
      swal({
        title: "No movies added",
        text: "Please, add some!"
      });
    }
    // navigate('/as');
    
    return (
      <>
        <h2 className='title'>MY MOVIES</h2>
         <section>
          {data.map(elem=>{
            return  <div className="card-container" key={elem.Title}>
                      <img className="card-container__img" src={elem.Poster} alt={`Cover of the film ${elem.Title}`} />
                      <div className='card-container__info'>
                        {elem.Title}<br/>
                        {elem.Year}
                      </div>
                    </div>
          })
          }
        </section>
      </>
       
    )
}

export default User
