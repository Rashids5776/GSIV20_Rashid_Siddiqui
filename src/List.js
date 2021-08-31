import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css';

import Movie from './Movie';

const List = props => (
    <ul className="movies">
      {props.movies.map(movie => (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  );
  
  List.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
  };
  
  export default List;