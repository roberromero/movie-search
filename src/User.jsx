import React, { useState } from 'react'
import bin from './img/bin.png';
import edit from './img/edit.png';
import swal from 'sweetalert';

const User = ({ data, updateData }) => {

  const [ value, setValue ] = useState("");

    const handleDelete = (id) => {
        
        swal({
          title: "Are you sure?",
          buttons: true
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("The movie has been deleted!", {
            });
            updateData( data.filter(elem=> elem.imdbID !== id) );
          }
        });
    }
    const handleEdit = (id) => {
      swal({
        title: "Please, leave your comment:",
        content: "input"
      })
      .then((value) => {
        setValue(value);
        data.forEach(element => {
          if(element.imdbID === id){
            element.Comment= value;
          }
        })   
      });
        
    }
   
   
    return (
      <>
        <h2 className='title'>MY MOVIES</h2>
        <section>
          {data.map(elem=>{
            return  <div className="card-container" key={elem.imdbID}>
                      <img src={edit} className='card-container__add-edit' onClick={()=>handleEdit(elem.imdbID)} alt='edit comment button'/>
                      <img src={bin} id='remove' onClick={()=>handleDelete(elem.imdbID)} alt='delete button'/>
                      <img className="card-container__img" src={elem.Poster} alt={`Cover of the film ${elem.Title}`} />
                      <div className='card-container__info'>
                        {elem.Title}<br/>
                        {elem.Year}
                      </div>
                      <p> {elem.Comment} </p>
                    </div>
          })
          }
        </section>
      </>
    )
}

export default User
