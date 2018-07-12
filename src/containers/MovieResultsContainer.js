import { connect } from 'react-redux'
import MovieResults from '../components/MovieResults';

const mapStateToProps = reduxState => {
  return {
    movies: reduxState.movieResults
  };
};

export default connect(
  mapStateToProps
)(MovieResults);
