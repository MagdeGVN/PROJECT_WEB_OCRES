import React, {Component} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';

const test = {
    id: 'cc',
    movie: 'String',
    yearOfRelease: 1,
    duration: 1,
    actors: ['String', 'String'],
    poster: 'String',
    boxOffice: 1,
    rottenTomatoesScore: 1,
}

const postFilm = (film) => {
    const fetch = async (film) => {
        try{
            await axios.post('http://localhost:2000/films/',film)
        }catch(err){
        }
    }
    fetch(film);
}
export default function Films(){
    postFilm(test);
    return (<div>C'est moche!</div>);
}
