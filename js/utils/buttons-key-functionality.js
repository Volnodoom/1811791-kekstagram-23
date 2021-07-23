const bodyTag = document.body;
const fullView = bodyTag.querySelector('.big-picture');
const fullViewCloseButton = fullView.querySelector('#picture-cancel');
const correctImage = bodyTag.querySelector('.img-upload__overlay');
const uploadFile = bodyTag.querySelector('#upload-file');
const correctionCloseButton = bodyTag.querySelector('#upload-cancel');

// eslint-disable-next-line arrow-body-style
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc'|| evt.keyCode === 27;
};

//<---- full view close button functionality -----> //

// eslint-disable-next-line no-use-before-define
const onClickFullView = () => closeFullView();

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

//<---- functionality for correction uploaded photo ----->
// Delete after completing this module ----->
bodyTag.classList.remove('modal-open');
fullView.classList.add('hidden');
// Delete after completing this module <-----

uploadFile.addEventListener('change', () => {
  correctImage.classList.remove('hidden');
  document.body.classList.add ('modal-open');
  // eslint-disable-next-line no-use-before-define
  openCorrection();
});

// eslint-disable-next-line no-use-before-define
const onClickCorrection = () => closeCorrection();

// eslint-disable-next-line no-use-before-define
const onEscCorrection = (evt) => {if (isEscEvent(evt)) {closeCorrection();}};

const closeCorrection = () => {
  bodyTag.classList.remove('modal-open');
  correctImage.classList.add('hidden');
  correctionCloseButton.removeEventListener('click', onClickCorrection);
  document.removeEventListener('keydown', onEscCorrection);
};

const openCorrection = () => {
  correctionCloseButton.addEventListener('click', onClickCorrection);
  document.addEventListener('keydown', onEscCorrection);
};

export {};
