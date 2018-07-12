import React from 'react';
import Welcome from './Welcome';
import MovieSearchContainer from '../containers/MovieSearchContainer';
import MovieResultsContainer from '../containers/MovieResultsContainer';

class App extends React.Component {
  render(){
    return (
      <div>
        <Welcome />
        <MovieSearchContainer />
        <MovieResultsContainer />
      </div>
    )
  }
}

export default App;
