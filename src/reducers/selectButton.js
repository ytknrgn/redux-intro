function selectButton( state = {}, action ){
  switch(action.type) {
    case 'SELECT_BUTTON':
      return {
        selectedButton: action.selectedButton
      }
    default:
      return state;
  }
}

export default selectButton;
