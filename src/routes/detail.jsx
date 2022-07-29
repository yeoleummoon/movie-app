import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
  };
    getDetail();
  },[id]);
  return ( 
  <div>
  <h1>Detail</h1>
  {loading ? <h2>Loading...</h2> : 
    detail.map((movie) =>
    <h3 key={movie.id}>{movie.title}</h3>
    )}
  </div>
  );
}

export default Detail;