import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css';
import {useHistory} from "react-router-dom";

const Movie = (props) => {
  const history = useHistory();
  return (
    <div className="movie">
      <figure onClick={() => { console.log("Clicked Page"); history.push('/details/'+props.id);}}>
        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} className="mov_img" alt={props.title} />
        <figcaption>
          <div className="movt">
          <span className="movie__title">{props.title}</span>
          </div>
          <div className="movr">
          <span className="movie_rating">{props.vote_average}</span>
          </div>
          <p className="movie_desc">{props.overview}</p>
        </figcaption>
      </figure>
    </div>
  )};
  
  Movie.propTypes = {
    id         : PropTypes.number.isRequired,
    title      : PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average    : PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  };

  export default Movie;