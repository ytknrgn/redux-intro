function movieInput(state = '', action){
  switch (action.type) {
    case 'SET_MOVIE_STRING':
      return action.movieString
    default:
      return state
  }
}

export default movieInput;
