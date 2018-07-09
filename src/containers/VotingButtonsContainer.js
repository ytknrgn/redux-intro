import { connect } from 'react-redux';
import VotingButtons from '../components/VotingButtons';
import { selectButton } from '../actions';

const mapStateToProps = state => {
  return {
    selectedButton: state.selectButton.selectedButton
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: button => dispatch(selectButton(button))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VotingButtons);
