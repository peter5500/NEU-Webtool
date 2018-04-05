import React from 'react';
import { connect } from 'react-redux';
import { setField } from './reducers/forms';
import { copyTempCat } from './reducers/cats';

const AddCat = ({ cat, changeValue, getValue, saveCat }) => {
  return (
    <div>
      <ul>
        <li> Name: <input onChange={ (e) => changeValue('name', e.target.value) } value={getValue('name')}/></li>
        <li> Age: <input onChange={ (e) => changeValue('age', e.target.value) } value={getValue('age')}/></li>
        <li> Color: <input/></li>
        <li> Breed: <input/></li>
      </ul>
      <button onClick={saveCat} >Add</button>
    </div>
  );

};

export default connect(
  state => {
    return {
      getValue: field => state.forms.field
    };
  },
  dispatch => {
    return {
      changeValue: (field, value) => dispatch(setField(field, value)),
      saveCat: () => dispatch(copyTempCat())
    };
  }
)(AddCat);
