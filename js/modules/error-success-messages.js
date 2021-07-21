const ALERT_SHOW_TIME = 15000;
const ERROR_MESSAGE = (error) => {`Произошла ошибка ${error} при подключении к сервису.
Просьба обратится в службу поддержки или перезаргузить страницу через пару минут.`;};

// eslint-disable-next-line arrow-body-style
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27;
};

const showError = (codErrorInfo) => {
  const alertContainer = document.createElement ('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.fontWeight = 'bold';
  alertContainer.style.color = 'white';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = ERROR_MESSAGE (codErrorInfo);

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove ();
  }, ALERT_SHOW_TIME);
};

const bodyHTML = document.querySelector('body');
const errorTemplate = bodyHTML.querySelector('#error').content('.error').cloneNode(true);
const buttonError = errorTemplate.querySelector('.error__button');
const successTemplate = bodyHTML.querySelector('#success').content('.success').cloneNode(true);
const buttonSuccess = successTemplate.querySelector('.success__button');

const openPopupError = () => {bodyHTML.insertAdjacentElement (beforeend, errorTemplate);};
// eslint-disable-next-line no-use-before-define
const onClickPopupError = () => {removePopupError();};
// eslint-disable-next-line no-use-before-define
const onEscKeyDownPopupError = (evt) => {if (isEscEvent (evt)){removePopupError();}};

const openPopupSuccess = () => {bodyHTML.insertAdjacentElement (beforeend, successTemplate);};
// eslint-disable-next-line no-use-before-define
const onClickPopupSuccess = () => {removePopupSuccess();};
// eslint-disable-next-line no-use-before-define
const onEscKeyDownPopupSuccess = (evt) => {if (isEscEvent (evt)){removePopupSuccess();}};

const showPopupError = () => {
  openPopupError();
  buttonError.addEventListener('click', onClickPopupError);
  document.addEventListener('click', onClickPopupError);
  document.addEventListener('keydown', onEscKeyDownPopupError);
};

const removePopupError = () => {
  openPopupError().remove();
  buttonError.removeEventListener('click', onClickPopupError);
  document.removeEventListener('click', onClickPopupError);
  document.removeEventListener('keydown', onEscKeyDownPopupError);
};

const showPopupSuccess = () => {
  openPopupSuccess();
  buttonSuccess.addEventListener('click', onClickPopupSuccess);
  document.addEventListener('click', onClickPopupSuccess);
  document.addEventListener('keydown', onEscKeyDownPopupSuccess);
  console.log ('!!! add functionality for reset option !!!');
};

const removePopupSuccess = () => {
  openPopupSuccess().remove();
  buttonSuccess.removeEventListener('click', onClickPopupSuccess);
  document.removeEventListener('click', onClickPopupSuccess);
  document.removeEventListener('keydown', onEscKeyDownPopupSuccess);
};

export {showError, showPopupError, showPopupSuccess, removePopupSuccess};
