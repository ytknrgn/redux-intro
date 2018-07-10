import React from 'react';
import MovieSearchContainer from '../containers/MovieSearchContainer';
import MovieResultsContainer from '../containers/MovieResultsContainer';

class App extends React.Component {
  render(){
    return (
      <div>
        <MovieSearchContainer />
        <MovieResultsContainer />
      </div>
    )
  }
}

export default App;
