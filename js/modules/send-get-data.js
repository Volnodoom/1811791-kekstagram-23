const getData = async (showError) => {
  let response;

  try {
    response = await fetch ('https://23.javascript.pages.academy/kekstagram/data');
    if (!response.ok) {
      throw new Error (`${response.status} -- ${response.statusText}`);
    }
  } catch (err) {
    showError();
  }

  const posts = await response.json();
  return posts;
};

const sendData = async (showPopupSuccess, showPopupError, body) => {
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
    showPopupError ();
  }

  return showPopupSuccess ();
};

export {getData, sendData};
