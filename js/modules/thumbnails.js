import { getData } from './send-get-data.js';


const URL_FOR_DATA = 'https://23.javascript.pages.academy/kekstagram/data';


const boxWithThumbnails = document.querySelector('.pictures');
const referencePic = document.querySelector('#picture').content.querySelector('.picture');

const creatThumbnails = (datum) => {
  const picElement = referencePic.cloneNode(true);

  const urlPic = referencePic.querySelector('img');
  urlPic.setAttribute ('src', datum.url);

  const likesPic = referencePic.querySelector('.picture__likes');
  likesPic.textContent = datum.likes;

  const commentsPic = referencePic.querySelector('.picture__comments');
  commentsPic.textContent = datum.comments;

  return boxWithThumbnails.appendChild(picElement);
};

const tempData = getData(URL_FOR_DATA).then((data) => data.slice(1, 20).forEach((datum) => creatThumbnails (datum)));
console.log (tempData);

