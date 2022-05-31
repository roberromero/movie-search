import React from 'react'
import video from "./img/video.png";

const Nav = ({handleSubmit, handleChange}) => {
 return(
    <nav>
        <div className="logo">
            <img src={video} alt="video image"/>
            <h1 className="logo">MOVIE SEARCH</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <input className="search-input" typeof="text" placeholder="Search..." onChange={handleChange}/>
            <button typeof="submit">Search</button>
        </form> 
    </nav>
 );
}

export default Nav
