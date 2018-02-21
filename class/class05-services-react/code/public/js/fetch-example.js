(() => { // IIFE to prevent polluting global space

  // A bit of a wordy demonstration of some fetch() calls

  const elements = {
    status: document.querySelector('.info6250 .status'),
    getSubmit: document.querySelector('.info6250 .submit-get'),
    postSubmit: document.querySelector('.info6250 .submit-post'),
    name: document.querySelector('.info6250 .name'),
    choice: document.querySelector('.info6250 .cats')
  };

  const page = {
    status: 'No service called yet'
  };

  const render = ({ page, elements }) => {
    elements.status.innerHTML = page.status;
  };

  const makeSummary = inboundData => {
    return `${inboundData.sawMethod} Service saw 'name' as '${inboundData.sawName}' and 'choice' as '${inboundData.sawChoice}'`;
  };

  const makeError = (error) => {
    const messages = {
      'error-response-not-okay': 'Troubles talking with the service',
      'error-response-json-bad': 'Response failed to parse as JSON',
      default: 'Unknown error'
    };

    const message = messages[error] || messages.default;
    return `<span class="error">${message}</span>`
  };

  const updateBody = ({ message, page, elements }) => {
    page.status = message || makeSummary();
    render({ page, elements });
  };

  const createQueryString = ( elements ) => {
    return [
      `name=${encodeURIComponent(elements.name.value || '')}`,
      `choice=${encodeURIComponent(elements.choice.value || '')}`
    ].join('&');
  };

  const createBaseUrl = () => {
    return `/byMethod`;
  };

  const createGetUrl = (elements) => {
    const queryString = createQueryString(elements);
    return `${createBaseUrl()}?${queryString}`;
  };

  const callGetJsonService = (url) => {
    return fetch(url)
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject('error-response-not-okay');
    })
    .catch( ( error ) => {
      if(error.toString().startsWith('error-')) {
        return Promise.reject(error);
      }
      return Promise.reject('error-response-json-bad');
    });
  };

  const callPostJsonService = (url, body) => {
    return fetch(url, { method: 'POST', body: JSON.stringify(body) })
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject('error-response-not-okay');
    })
    .catch( ( error ) => {
      if(error.toString().startsWith('error-')) {
        return Promise.reject(error);
      }
      return Promise.reject('error-response-json-bad');
    });
  };

  const performGetRequest = ({ page, elements }) => {
    const url = createGetUrl(elements);
    callGetJsonService(url)
    .then( fromJson => {
      updateBody({ message: makeSummary(fromJson), elements, page });
    })
    .catch( error => {
      updateBody({ message: makeError(error), elements, page });
    });
  };

  const scrapePostData = (elements) => {
    return {
      name: elements.name.value,
      choice: elements.choice.value
    };
  };

  const performPostRequest = ({ page, elements }) => {
    const url = createBaseUrl();
    const body = scrapePostData(elements);
    callPostJsonService(url, body)
    .then( fromJson => {
      updateBody({ message: makeSummary(fromJson), elements, page });
    })
    .catch( error => {
      updateBody({ message: makeError(error), elements, page });
    });
  };


  elements.getSubmit.addEventListener('click', () => {
    performGetRequest({ page, elements });
  });

  elements.postSubmit.addEventListener('click', () => {
    performPostRequest({ page, elements });
  });

  render({ page, elements });

})();
