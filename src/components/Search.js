import React, { useState } from 'react'

const Search = ({ searchUpdate }) => {

    const modifySearch = (e) => {
        searchUpdate(e.target.value);
    }

    return (
        <div>
            <div>
                <p>Movie Title</p>
                <input onChange={modifySearch} type="text" placeholder="Type movie title..."></input>
            </div>
        </div>
    )
}

export default Search;