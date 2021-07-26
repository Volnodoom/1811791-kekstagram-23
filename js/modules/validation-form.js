const MAX_LENGTH = 140;
const NUMBER_OF_HASHTAG = 5;
const HASHTAG_LENGTH = 20;
const HASHTAG_MIN_LENGTH = 1;

const imgUploadingSection = document.querySelector('.img-upload');
const textCorrectionField = imgUploadingSection.querySelector('.img-upload__text');
const hashtagInput = imgUploadingSection.querySelector('.text__hashtags');
const textInput = imgUploadingSection.querySelector('.text__description');

textCorrectionField.addEventListener('input', () => {
  const textLength = textInput.value.length;
  if (textLength >= MAX_LENGTH-10) {
    textInput.setCustomValidity (`Вам доступно ввести ещё ${MAX_LENGTH-textLength} символов`);
  } else {textInput.setCustomValidity ('');}

  if (!(hashtagInput.value === '')) {
    const hashtag = hashtagInput
      .value
      .toLowerCase()
      .trim()
      .split(' ');
    //console.log(hashtag.value === '')

    const uniqueHashtag = new Set (hashtag);

    const inputErrors = [
      !(hashtag.length <= NUMBER_OF_HASHTAG),
      !(hashtag.every ((string) => string.match(/^#/g))),
      !(hashtag.every ((string) => string.length > HASHTAG_MIN_LENGTH)),
      !(hashtag.every ((string) => string.length <= HASHTAG_LENGTH)),
      !(hashtag.every ((string) => string.match(/^#[A-Za-zА-Я-а-я0-9]{1,19}$/g))),
      !(hashtag.length === uniqueHashtag.size),
    ];

    switch (true) {
      case inputErrors[0]:
        hashtagInput.setCustomValidity (`Количество хэштегов привысило ${NUMBER_OF_HASHTAG}, пожалуйста, удалите излишние.`);
        break;
      case inputErrors[1]:
        hashtagInput.setCustomValidity ('Хэш-тег должен начинаться с символа # (решётка).');
        break;
      case inputErrors[2]:
        hashtagInput.setCustomValidity ('Хеш-тег не может состоять только из одной решётки.');
        break;
      case inputErrors[3]:
        hashtagInput.setCustomValidity ('Максимальная длина одного хэш-тега 20 символов, включая решётку.');
        break;
      case inputErrors[4]:
        hashtagInput.setCustomValidity ('Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
        break;
      case inputErrors[5]:
        hashtagInput.setCustomValidity ('Хэш-теги не должны повторяться.');
        break;
      default:
        hashtagInput.setCustomValidity ('');
    }

    textInput.reportValidity('');
    hashtagInput.reportValidity('');
  }
});

