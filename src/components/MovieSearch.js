import React from 'react';

function MovieSearch({ movieString, handleChange, submitSearch }) {
  return (
    <form onSubmit={(event) => submitSearch(event, movieString)}>
      <label htmlFor="movie-search">Search for a movie</label>
      <input
        type="text"
        onChange={(event) => handleChange(event.target.value)}
        value={movieString}
      />
    </form>
  );
}

export default MovieSearch;
