import PropTypes from "prop-types";


function moviedetail({coverImg, title, year, summary, genres, runtime, rating, download, like}){
  return (
  <div className="container">
    <img src={coverImg} alt={title} />
      <div className="index">
      <h2>{title}</h2>
        <span>{year}|{runtime}</span>
        <div>
          <>{rating}</>
          <>{download}</>
          <>{like}</>
        </div>
        <p>{summary}</p>
    <ul>
    {genres.map(ge => <li key={ge}>{ge}</li>)}
    </ul>
      </div>
  </div>
)}

moviedetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  download: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default moviedetail;