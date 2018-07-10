import { connect } from 'react-redux'
import MovieSearch from '../components/MovieSearch';

const mapStateToProps = state => {
  return {
    movieString: state.movieInput
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: movieString => 
    submitSearch:
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch);
