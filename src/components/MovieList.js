import React from 'react'

const MovieList = ({ search }) => {
    return (
        <div>
            <p>Results for <span>{search}</span></p>
        </div>
    )
}

export default MovieList;