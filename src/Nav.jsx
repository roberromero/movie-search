import React from 'react'
import video from "./img/video.png";
import home from "./img/home.png";
import user from "./img/user.png";
import { NavLink } from 'react-router-dom';
const Nav = ({handleSubmit, handleChange}) => {
 return(
    <nav>
        <div className="logo">
            <img src={video} alt="movie clapboard icon"/>
            <h1 className="logo">MOVIE SEARCH</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <input className="search-input" typeof="text" placeholder="Search..." onChange={handleChange}/>
            <button typeof="submit">Search</button>
        </form>
        <div className='container-icons'>
            <NavLink to="/"> <img src={home} className='nav-home' alt='home icon'/> </NavLink>
            <NavLink to='/user'><img src={user} className='nav-user' alt='user icon'/></NavLink>
        </div>
    </nav>
 );
}

export default Nav
