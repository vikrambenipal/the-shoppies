import React, { useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';

function App() {

  const [search, setSearch] = useState("");

  const searchUpdate = (value) => {
    setSearch(value);
  }

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <Search searchUpdate={searchUpdate} />
      <MovieList search={search}/>
    </div>
  );
}

export default App;
