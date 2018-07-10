export function setMovieString(movieString){
  return {
    type: 'SET_MOVIE_STRING',
    movieString
  };
};

export function receiveMovies(result){
  return {
    type: 'RECEIVE_MOVIES',
    movies: result.Search
  }
}

export function fetchMovies(movieString){
  return function(dispatch, getState){
    fetch(`http://www.omdbapi.com/?s=${movieString}&apikey=2cda7206`)
      .then(response => response.json())
      .then(result => {
        dispatch(receiveMovies(result));
        dispatch(setMovieString(''));
      })
      .catch(function(error) {
        // something went wrong. let's sort it out
      });
  }
}
