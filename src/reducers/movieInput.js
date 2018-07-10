function movieInput(state = '', action){
  switch (action.type) {
    case 'SUBMIT_SEARCH':
      return action.movieString
      break;
    default:
      return state
  }
}
