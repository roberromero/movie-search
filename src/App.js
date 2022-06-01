import React, { Component }  from 'react';
import { useState } from "react";
import './App.css';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import User from './User';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

// Here is your key: 19fe2539
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=19fe2539

const API_URL = 'http://www.omdbapi.com/?apikey=19fe2539';



const App = () => {
    const [title, setTitle] = useState("");
    const[ movies, setMovies] = useState([]);
    //Fetch data from API
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data);
    }

    //Functions passed to "NAV" as props
    const handleChange = (e)=>{
      setTitle(e.target.value);
    }
    const handleSubmit = (e)=> {
      e.preventDefault();
      searchMovies(title);
    }
  //Functions passes to "HOME" as props
  const [data, updateData] = useState([]);

  const handleClick = (elem)=> {
    updateData(oldArray=> [...oldArray, elem]);
    console.log(data);
  }
  return (

    <BrowserRouter>
    
      <div className="App">
        <Nav handleSubmit={handleSubmit} handleChange={handleChange}/>
        <Routes>
          <Route path='/' element={movies.length > 0 ? <Home api={API_URL} movies={movies} handleClick={handleClick}/> : <p></p>}/>
          <Route path="/about" element= { <About /> } />
          <Route path='/user' element= { <User data={data}/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
    
    
  );
}

export default App
