import { useState } from "react";
import './App.css';
import Card from './Card';
import Nav from './Nav';
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
        console.log(data);
    }

const handleChange = (e)=>{
  setTitle(e.target.value);
}
const handleSubmit = (e)=> {
  e.preventDefault();
  searchMovies(title);
}

  return (
    <div className="App">
      <Nav handleSubmit={handleSubmit} handleChange={handleChange}/>
      <section>
        {movies.length > 0 ? <Card movies={movies}/> : <p></p>}
      </section>
    </div>
    
  );
}

export default App
