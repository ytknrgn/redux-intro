import { combineReducers } from 'redux';
import country from './country';
import selectButton from './selectButton';

export default combineReducers({
  selectButton: selectButton,
  country: country
});
