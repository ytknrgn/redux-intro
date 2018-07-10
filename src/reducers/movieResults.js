function movieResults(state = [], action){
  switch (action.type) {
    case 'RECEIVE_SEARCH':
      return action.searchResults
      break;
    default:
      return state
  }
}
