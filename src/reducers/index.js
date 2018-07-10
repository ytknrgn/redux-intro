import { combineReducers } from 'redux';
import movieInput from './movieInput';
import movieResults from './movieResults';

export default combineReducers({
  movieInput,
  movieResults
});
