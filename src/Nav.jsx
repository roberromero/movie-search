import React from 'react'
import video from "./img/video.png";
import home from "./img/home.png";
import user from "./img/user.png";
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
        <div className='container-icons'>
            <a><img src={home} className='nav-home'/></a>
            <a><img src={user} className='nav-user'/></a>
        </div>
    </nav>
 );
}

export default Nav
