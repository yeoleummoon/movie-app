import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Moviedetail from "../components/moviedetail";

function Detail(){
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getDetail = async() => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const json =  await response.json();
    setDetail(json.data.movie);
    setLoading(false);
    console.log(json);
  };
    getDetail();
  },[id]);
  return ( 
  <div>
  <h1>Detail</h1>
  {loading ? <h2>Loading...</h2> : 
    detail.map((movie) =>
    <Moviedetail 
    key={movie.id}
    coverImg={movie.small_cover_image} 
    year={movie.year}
    runtime={movie.runtime}
    title={movie.title}
    rating={movie.rating}
    download={movie.download_count}
    like={movie.like_count}
    summary={movie.summary}
    genres={movie.genres}    
    />)}
  </div>
  );
}

export default Detail;