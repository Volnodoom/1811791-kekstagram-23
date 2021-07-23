import { getData } from './send-get-data.js';


const URL_FOR_DATA = 'https://23.javascript.pages.academy/kekstagram/data';


const boxWithThumbnails = document.querySelector('.pictures');


const creatThumbnails = (datum) => {
  const {url,likes,comments} = datum;
  const referencePic = document.querySelector('#picture').content.querySelector('.picture');

  const urlPic = referencePic.querySelector('img');
  urlPic.setAttribute ('src', url);

  const likesPic = referencePic.querySelector('.picture__likes');
  likesPic.textContent = likes;

  const commentsPic = referencePic.querySelector('.picture__comments');
  commentsPic.textContent = comments;

  const picElement = referencePic.cloneNode(true);
  return boxWithThumbnails.appendChild(picElement);
};

getData(URL_FOR_DATA).then((data) => data.slice(0, 19).forEach((datum) => creatThumbnails (datum)));


