import React from 'react';
import { useState } from "react";
import './App.css';
import Home from './Home';
import Nav from './Nav';
import User from './User';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from './Footer';
import ErrorPage from './ErrorPage';

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
    }

    //Functions passed to "NAV" as props
    const handleChange = (e)=>{
      setTitle(e.target.value);
    }
    const handleSubmit = (e)=> {
      e.preventDefault();
      searchMovies(title);
    }
  //Functions passes to "USER" as props
  const [data, updateData] = useState([]);

const handleClick = (elem)=> {
  updateData(oldArray=> [...oldArray, elem]);
  // Using sweetalert.js.org 
  swal({
    title: "Movie Added!",
    text: "Check your personal profile"
  });
  setAnyMovies(true);
  setMovieCounter(movieCounter+1);
}
 //EVALUATES "data" object to RETURN boolean value, passed to <Nav /> as prop
const [anyMovies, setAnyMovies] = useState(false);

 //Movies counter, passed to <Nav /> as prop
const [movieCounter, setMovieCounter] = useState(0);
  
    
  return (

    <BrowserRouter>
        <Nav handleSubmit={handleSubmit} handleChange={handleChange} anyMovies={anyMovies} movieCounter={movieCounter}/>
        <Routes>
          <Route path='/' element={movies && <Home api={API_URL} movies={movies} handleClick={handleClick}/>}/>
          <Route 
          path='/user' 
          element={anyMovies ? <User data={data}/> : <Navigate to='/'/>}
           />
          <Route path='*' element={ <ErrorPage /> }></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App
