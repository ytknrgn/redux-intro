import React from 'react';
import VotingButtons from './VotingButtons';

class App extends React.Component {
  constructor(props){
    super(props);

    const reduxState = this.props.store.getState();

    this.state = {
      selectedButton: reduxState.selectedButton
    }
  }

  componentDidMount(){
    const { store } = this.props;
    store.subscribe( () => {
      console.log('2. subscribed to store updates');
      this.updateFromStore();
    });
  }

  updateFromStore(){
    const { store } = this.props;

    const reduxState = store.getState();
    console.log('5. Get updated state from redux store');

    this.setState({
      selectedButton: reduxState.selectedButton
    }, ()=> console.log('6.New value os state is', this.state));
  }

  render(){
    return (
      <div>
        <VotingButtons
          selectedButton={this.state.selectedButton}
          dispatch={this.props.store.dispatch}
        />
      </div>
    )
  }
}

export default App;
