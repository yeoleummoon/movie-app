import PropTypes from "prop-types";

function moviedetail({coverImg, title, year, genres, runtime, rating, download, like}){
  return (
  <div>
    <img src={coverImg} alt={title} />
      <div>
      <h2>{title}</h2>
        <span>{year}년 | {runtime}분</span>
        <div>
          <span>rate : {rating}</span>
          <span>download : {download}</span>
          <span>like :{like}</span>
        </div>
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