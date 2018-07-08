import React from 'react';
import PropTypes from 'prop-types';
import VotingButtons from '../components/VotingButtons';

class VotingButtonsContainer extends React.Component {
  constructor(props){
    super(props);
    debugger;
    const reduxState = this.context.store.getState();

    this.state = {
      selectedButton: reduxState.selectButton.selectedButton
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.context.store.subscribe( () => {
      this.updateFromStore();
    });
  }

  handleClick(button){
    this.context.store.dispatch({
      type: 'SELECT_BUTTON',
      selectedButton: button
    })
  }

  updateFromStore(){
    const reduxState = this.context.store.getState();

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

VotingButtonsContainer.contextTypes = {
  answer: PropTypes.number
};

export default VotingButtonsContainer;
