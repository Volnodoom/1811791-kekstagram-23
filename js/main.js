import './modules/error-success-messages.js';
//import {getData} from './modules/send-get-data.js';
import './modules/thumbnails.js';
import './modules/fullscreen-pic.js';
import './utils/buttons-key-functionality.js';
import './modules/validation-form.js';
import './modules/slider.js';

// const URL_FOR_DATA = 'https://23.javascript.pages.academy/kekstagram/data';

// getData(URL_FOR_DATA).then((data) => data.slice(0, 1));

//console.log('IM FEELING GOOD')
const correctImage = document.querySelector('.img-upload__overlay');
correctImage.classList.remove('hidden');
