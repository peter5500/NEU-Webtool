//// Reducer
const initialState = {
  'Savage Henry': {
    name: 'Savage Henry',
    breed: 'Siamese',
    color: 'white',
    age: 14
  }
};
const cats = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_CAT':
      return { ...state, [action.cat.name]: {...action.cat} };
    case 'REMOVE_CAT':
      return Object.keys(state).filter( key => key !== action.name ).reduce( (all, key) => ({ ...all, [key]: state[key]}), {});
    default:
      return state;
  }
};
//// Actions

export const addCat = (cat) => {
  return {
    type: 'ADD_CAT',
    cat
  };
};

export const removeCat = (name) => {
  return {
    type: 'REMOVE_CAT',
    name
  };
};

const getTempCat = (state) => {
  return {
    name: state.forms.name,
    age: state.forms.age
  };
};

export const copyTempCat = () => {
  return (dispatch, getState) => {
    const state = getState();
    const cat = getTempCat(state);
    dispatch( addCat(cat) );
  };
};

export default cats;
