import React from 'react';
import VotingButtonsContainer from '../containers/VotingButtonsContainer';
import CountrySelector from './CountrySelector';

class App extends React.Component {
  constructor(props){
    super(props);

    const reduxState = this.props.store.getState();

    this.state = {
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen
    }
  }

  componentDidMount(){
    const { store } = this.props;
    store.subscribe( () => {
      this.updateFromStore();
    });
  }

  updateFromStore(){
    const { store } = this.props;

    const reduxState = store.getState();

    this.setState({
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen
    });
  }

  render(){
    return (
      <div>
        <VotingButtonsContainer store={this.props.store} />
        <CountrySelector
          selectedCountry={this.state.selectedCountry}
          countryListOpen={this.state.countryListOpen}
          dispatch={this.props.store.dispatch}
        />
      </div>
    )
  }
}

export default App;
