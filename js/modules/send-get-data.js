import { showError } from './error-success-messages.js';

const URL_TO_SEND = 'https://23.javascript.pages.academy/kekstagram';

const getData = async (url) => {
  let response;

  try {
    response = await fetch (url);
    if (!response.ok) {
      throw new Error (`${response.status} -- ${response.statusText}`);
    }
  } catch (err) {return showError(err);}

  return await response.json();
};

const sendData = async (onSuccess, onError, body) => {
  let response;

  try {
    response = await fetch (
      URL_TO_SEND,
      {
        method:'POST',
        body,
      },
    );
    if (!response.ok) {
      throw new Error (`${response.statusText} -- ${response.statusText}`);
    }
  } catch (err) {
    onError ();
  }

  return onSuccess ();
};

export {getData, sendData};
