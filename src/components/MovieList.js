import React, { useState } from 'react'
import axios from 'axios';



const MovieList = ({ search }) => {

    const [result, setResult] = useState([]);

    axios.get(`http://www.omdbapi.com/?apikey=e82192d8&s=${search}`)
    .then((e) => {
        if(e.data.Response){
            console.log(e.data.Search);
        }else{
            
        }
    })

    return (
        <div>
            <p>Results for <span>{search}</span></p>
            {console.log(result)}
            {result.map(movie => {
                return <p>{movie.title}</p>
            })}
        </div>
    )
}

export default MovieList;