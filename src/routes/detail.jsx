import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Moviedetail from "../components/moviedetail";
import styles from "./detail.module.css";


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
  <div className={styles.container}>
  {loading ? "" : <h1>Detail</h1>}
  {loading ? 
  (<div className={styles.loader}>
      <span>Loading...</span>
  </div>) :(
    <div className={styles.index}>
    <Moviedetail 
    key={detail.id}
    coverImg={detail.medium_cover_image} 
    year={detail.year}
    runtime={detail.runtime}
    title={detail.title}
    rating={detail.rating}
    download={detail.download_count}
    like={detail.like_count}
    summary={detail.summary}
    genres={detail.genres}    
    />
    </div>
    )
  }
  </div>
  );
}
export default Detail;