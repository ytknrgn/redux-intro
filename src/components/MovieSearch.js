import React from 'react';

function MovieSearch({ movieString, handleChange, submitSearch }) {
  render(){
    return (
      <form onSubmit={() => submitSearch(movieString)}>
        <label htmlFor="movie-search">Search for a movie</label>
        <input
          type="text"
          onChange={(event) => handleChange(event.target.value)}
          value={movieString}
        />
      </form>
    )
  }
}

export default MovieSearch;
