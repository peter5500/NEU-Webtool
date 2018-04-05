///Reducer

const forms = (state = {}, action = {} ) => {
  switch(action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

//// Actions

export const setField = (field, value) => {
  return {
    type: 'SET_FIELD',
    field,
    value
  };
};

export default forms;
