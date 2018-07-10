import React from 'react';

function MovieResults({ movies }) {
  return (
    <div>
      <ul>
        {movies.map( movie => {
          return (
            <li key={movie.imdbID}>
              <h2>{movie.Title} - {movie.Year}</h2>
              <img src={movie.Poster} />
            </li>
          )
        } )}
      </ul>
    </div>
  );
}

export default MovieResults;
