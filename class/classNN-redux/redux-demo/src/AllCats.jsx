import React from 'react';
import { connect } from 'react-redux';
import DeleteCat from './DeleteCat';
import { removeCat } from './reducers/cats';

const AllCats = ({ cats, deleteCat }) => {
  const allCats = Object.values(cats);
  const allCatList = allCats.map( cat => ( <li key={cat.name}>
    {cat.name}, {cat.color} {cat.breed}, age: {cat.age}
    <DeleteCat name={cat.name} onDelete={() => deleteCat(cat.name)}/>
  </li>) );
  return (
    <ul>
      {allCatList}
    </ul>
  );
};

export default connect(
  state => {
    return {
      cats: state.cats
    };
  },
  dispatch => {
    return {
      deleteCat: name => dispatch(removeCat(name))
    }
  }
)(AllCats);
