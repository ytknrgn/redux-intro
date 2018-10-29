function selectButton( state = {}, action ){
  console.log('4. Update redux state');
  switch(action.type) {
    case 'SELECT_BUTTON':
      
      return {
        selectedButton: action.selectedButton
      }
    case 'RESET_BUTTON':
      return {
        selectedButton: undefined
      }
    default:
      return state;
  }
}

export default selectButton;
