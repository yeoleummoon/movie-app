import {useState,useEffect} from "react";
import Movie from "../components/movie";
import './home.module.css';

function Home(){
  const [loading,setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=download_count")
    const json =  await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies()
  },[])
  return ( 
    <div> 
    <h1>MOVIE</h1>
    {loading ? <h2>Loading...</h2> : 
    movies.map((movie) => 
    <Movie
    key={movie.id}
    id={movie.id}
    coverImg={movie.large_cover_image} 
    year={movie.year}
    title={movie.title}
    summary={movie.summary}
    genres={movie.genres}
    />)}
    </div>
  );
}

export default Home;