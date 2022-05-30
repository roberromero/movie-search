import { useState } from "react";
import './App.css';
import Card from './Card';
// Here is your key: 19fe2539
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=19fe2539

const API_URL = 'http://www.omdbapi.com/?apikey=19fe2539';



const App = () => {
    const [title, setTitle] = useState("");
    const[ movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

const handleChange = (e)=>{
  setTitle(e.target.value);
}
const handleSubmit = (e)=> {
  e.preventDefault();
  searchMovies(title);
}

  return (
    <>
      <nav>
        <h1 className="App">Movie-search</h1>
        <form onSubmit={handleSubmit}>
          <input className="search-input" typeof="text" placeholder="Search..." onChange={handleChange}/>
          <button typeof="submit">Search</button>
        </form> 
      </nav>
      <section>
        {movies.length > 0 ? <Card movies={movies}/> : <p></p>}
      </section>
      
      
    </>
    
  );
}

export default App
