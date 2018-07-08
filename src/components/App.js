import React from 'react';
import PropTypes from 'prop-types';
import VotingButtonsContainer from '../containers/VotingButtonsContainer';
import CountrySelectorContainer from '../containers/CountrySelectorContainer';

class App extends React.Component {
  getChildContext(){
    return {
      answer: 42
    };
  }
  
  render(){
    return (
      <div>
        <VotingButtonsContainer />
        {/* <CountrySelectorContainer store={this.props.store}/> */}
      </div>
    )
  }
}

App.childContextTypes = {
  answer: PropTypes.number
}

export default App;
