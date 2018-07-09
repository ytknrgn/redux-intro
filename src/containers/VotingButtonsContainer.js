import React from 'react';
import PropTypes from 'prop-types';
import VotingButtons from '../components/VotingButtons';
import { selectButton } from '../actions';

class VotingButtonsContainer extends React.Component {
  constructor(props, context){
    super(props, context);

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
    this.context.store.dispatch(selectButton(button))
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
  store: PropTypes.object
};

export default VotingButtonsContainer;
