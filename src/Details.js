import React from 'react';
import './Details.css';
import { useParams } from "react-router-dom";
import  {useState, useEffect} from "react";
import Appbarr1 from './Appbarr1';
import MovDetails from './MovDetails';

const Details = () => {

    const {id} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=494719e581ff21674c6ec386bc636b04`;
        fetch (url)
        .then(response => response.json())
        .then(data => {
            setMovies(data);
        });
    }, []);

    return (
        <div className="details">
            <Appbarr1></Appbarr1>
            <MovDetails {...movies}></MovDetails>
        </div>
    )
}

export default Details;