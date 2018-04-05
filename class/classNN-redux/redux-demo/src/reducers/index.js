import { combineReducers } from 'redux';
import cats from './cats';
import forms from './forms';

export default combineReducers({
  cats,
  forms
});

