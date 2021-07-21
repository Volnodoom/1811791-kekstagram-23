import { showError } from './get-data-error';


const getData = async () => {
  let response;

  try {
    response = await fetch ('https://23.javascript.pages.academy/kekstagram/data');
    if (!response.ok) {
      throw new Error (`${response.status} -- ${response.statusText}`);
    }
  } catch (err) {
    showError(err);
  }

  const posts = await response.json();
  return posts;
};

const sendData = async (onSuccess, onError, body) => {
  let response;

  try {
    response = await fetch ('https://23.javascript.pages.academy/kekstagram',
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
