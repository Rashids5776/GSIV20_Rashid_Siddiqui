import React from 'react';
import PropTypes from 'prop-types';
import './MovDetails.css';
import Grid from '@material-ui/core/Grid';
import  {useState, useEffect} from "react";

const MovDetails = (props) => {

    const id  = props.id;
    const [credits, setCredits] = useState({});

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=494719e581ff21674c6ec386bc636b04`;
        fetch (url)
        .then(response => response.json())
        .then((data) => {
              setCredits(data);
        });
    }, [props.id]);

  const hours = Math.floor(props.runtime / 60);
  const mins = props.runtime % 60;

  return (
    <div className="movDetails">
        <Grid container spacing={3}>
        <Grid item>
            <img src={`https://image.tmdb.org/t/p/w300/${props.poster_path}`} className="movd_img" alt={props.title} />
        </Grid>
        <Grid item xs={8}>
          <div className="movdt">
          <h3>{props.title}</h3>
          </div>
          <div className="movdr">
            <span className="movied_rating"> ({props.vote_average})</span>
          </div><br></br>
          <span>{props.release_date} | {hours}:{mins} | {credits.cast && credits.crew.filter(x => x.known_for_department == 'Directing' ).map(e => e.name).join()}</span>
          <p>Cast: {credits.cast && credits.cast.filter(x => x.known_for_department == 'Acting' ).map(e => e.original_name).join()}</p>
          <p className="movied_desc">Description: {props.overview}</p>
        </Grid>
        </Grid>
    </div>
  )};
  
  MovDetails.propTypes = {
    id         : PropTypes.number,
    title      : PropTypes.string,
    poster_path: PropTypes.string,
    vote_average    : PropTypes.number,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.string,
  };

  export default MovDetails;