import React from 'react';

const DeleteCat = ({ name, onDelete }) => {
  return <button onClick={onDelete}>{name}</button>;
};

export default DeleteCat;
