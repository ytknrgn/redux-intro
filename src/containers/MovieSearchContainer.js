import { connect } from 'react-redux'
import MovieSearch from '../components/MovieSearch';
import { setMovieString, fetchMovies } from '../actions';

const mapStateToProps = state => {
  return {
    movieString: state.movieInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: movieString => dispatch(setMovieString(movieString)),
    submitSearch: (event, movieString) => {
      event.preventDefault();
      dispatch(fetchMovies(movieString))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch);
