import { getData } from "./send-get-data.js";


const URL_FOR_DATA = 'https://23.javascript.pages.academy/kekstagram/data';
const tempData = getData(URL_FOR_DATA).then((data) => data.slice(0, 1));

const boxWithThumbnails = document.querySelector('.pictures');
const referencePic = document.querySelector('#picture').content.querySelector('.picture');
const urlPic = referencePic.querySelector('img [src=""]');
const likesPic = referencePic.querySelector('.picture__likes');
const commentsPic = referencePic.querySelector('.picture__comments');

const fragment = document.createDocumentFragment();


console.log (tempData);

