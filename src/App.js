import React, { useEffect } from 'react';
import { useState } from "react";
import './App.css';
import Home from './Home';
import Nav from './Nav';
import User from './User';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from './Footer';
import ErrorPage from './ErrorPage';




const App = () => {

  // Here is your key: 19fe2539
  // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=19fe2539
  const API_URL = 'http://www.omdbapi.com/?apikey=19fe2539&';
  const [title, setTitle] = useState("");
  const[ movies, setMovies] = useState([]);
  //Fetch data from API
  const searchMovies = async (title) => {
          const response = await fetch(`${API_URL}s=${title}`);
          const data = await response.json();
          setMovies(data.Search);
          
      }     
  //For submiting the movie and send it to "SearchMovies" function
  const handleSubmit = (e)=> {
    e.preventDefault();
    searchMovies(title);
  }
  // It renders once, at the beggining to create a random search
  useEffect(()=>{
    const randomMovies = ["hulk", "superman", "batman", "carlos", "star wars", "x-men"];
    searchMovies(randomMovies[(Math.floor((Math.random()*6)))]);
  }, []);

  //For setting the title of the movie typed by user (Functions passed to "NAV" as props)
  const handleChange = (e)=> setTitle(e.target.value);

  //For adding a movie to USER (function passes to "USER" as props)
  const [data, updateData] = useState([]);
  const handleClick = (elem)=> {

    const addData = () => {
      updateData(oldArray=> [...oldArray, elem]);
      // Using sweetalert.js.org 
      swal({
        title: "Movie Added!",
        text: "Check your personal profile"
      });
      setAnyMovies(true);
      setMovieCounter(movieCounter+1);
     }   

        if(data.length===0){
          addData();
          console.log(1);
        }else{
          // if(pos.imdbID === elem.imdbID){
            //   console.log("no añadimos la película xq es similar");
            //   console.log(2);
            // }else{
            //   addData();
            //   console.log(3);
            // }
        }
          
            
        
        
        
   
      
  }
  //EVALUATES "data" object to RETURN boolean value, passed to <Nav /> as prop
  const [anyMovies, setAnyMovies] = useState(false);

  //Movies counter, passed to <Nav /> as prop
  const [movieCounter, setMovieCounter] = useState(0);
   
  //For decreasing "movieCounter"
  const decreaseMovieCounter = () => {
    //EJEMPLO PARA ANALIZAR CON RAFA--------------------------------------------------------------------
    setMovieCounter(movieCounter-1);
    movieCounter===1 ? setAnyMovies(false) : setAnyMovies(true);
  }
  

  return (

    <BrowserRouter>
        <Nav handleSubmit={handleSubmit} handleChange={handleChange} anyMovies={anyMovies} movieCounter={movieCounter}/>
        <Routes>
          <Route path='/' element={movies && <Home api={API_URL} movies={movies} handleClick={handleClick}/>}/>
          <Route 
          path='/user' 
          element={anyMovies ? <User data={data} updateData={updateData} decreaseMovieCounter={decreaseMovieCounter}/> : <Navigate to='/'/>}
           />
          <Route path='*' element={ <ErrorPage /> }></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App
