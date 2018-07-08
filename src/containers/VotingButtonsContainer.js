import React from 'react';
import VotingButtons from '../components/VotingButtons';

class VotingButtonsContainer extends React.Component {
  constructor(props){
    super(props);

    const reduxState = this.props.store.getState();

    this.state = {
      selectedButton: reduxState.selectButton.selectedButton
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const { store } = this.props;

    store.subscribe( () => {
      this.updateFromStore();
    });
  }

  handleClick(button){
    this.props.store.dispatch({
      type: 'SELECT_BUTTON',
      selectedButton: button
    })
  }

  updateFromStore(){
    const { store } = this.props;

    const reduxState = store.getState();

    this.setState({
      selectedButton: reduxState.selectButton.selectedButton
    });
  }

  render(){
    return (
      <VotingButtons
        selectedButton={this.state.selectedButton}
        handleClick={this.handleClick}
      />
    );
  }
}

export default VotingButtonsContainer;
