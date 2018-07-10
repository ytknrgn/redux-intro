import { connect } from 'react-redux'
import MovieResults from '../components/MovieResults';

const mapStateToProps = state => {
  return {
    movies: state.movieResults
  };
};

export default connect(
  mapStateToProps
)(MovieResults);
