const messages = {
  'get-fail': 'Failed to load list.  Check your network connection and try again.',
  'update-fail': 'Failed to update list.  Check your network connection and try again.',
  'generic-error': 'Uh-oh, something bad happened'
};

export const pickErrorMessage = code => {
  if(!code) {
    return '';
  }
  code = messages[code] ? code : 'generic-error';
  return messages[code];
}
