import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function movie({id, coverImg, title, year, summary, genres}){
  return (
  <div className="container">
    <img src={coverImg} alt={title} />
      <div className="index">
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <h3>{year}</h3>
        <p>{summary}</p>
    <ul>
    {genres.map(g => <li key={g}>{g}</li>)}
    </ul>
      </div>
  </div>
)}

movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default movie;