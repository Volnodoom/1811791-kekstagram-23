const bodyTag = document.body;
const fullView = bodyTag.querySelector('.big-picture');
const fullViewCloseButton = fullView.querySelector('#picture-cancel');

// eslint-disable-next-line arrow-body-style
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc'|| evt.keyCode === 27;
};

// full view close button functionality <----

// eslint-disable-next-line no-use-before-define
const onClickFullView = () => {closeFullView();};

// eslint-disable-next-line no-use-before-define
const onEscFullView = (evt) => {if (isEscEvent(evt)) {closeFullView();}};

const openFullView = () => {
  fullViewCloseButton.addEventListener('click', onClickFullView);
  document.addEventListener('keydown', onEscFullView);
};

const closeFullView = () => {
  bodyTag.classList.remove('modal-open');
  fullView.classList.add('hidden');
  fullViewCloseButton.removeEventListener('click', onClickFullView);
  document.removeEventListener('keydown', onEscFullView);
};

openFullView();

//export {}
