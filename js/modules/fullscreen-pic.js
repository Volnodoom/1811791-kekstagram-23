import { getData } from './send-get-data.js';

const URL_FOR_DATA = 'https://23.javascript.pages.academy/kekstagram/data';

const fullViewSection = document.querySelector('.big-picture');
const fullViewUrl =  fullViewSection.querySelector('.big-picture__img img');
const fullViewLikes = fullViewSection.querySelector('.likes-count');
const fullViewCommentsNumber = fullViewSection.querySelector('.comments-count');
const fullViewComments = fullViewSection.querySelector('.social__comments');
const fullViewMessageForAudience = fullViewSection.querySelector('.social__caption');
const lineXofYComments = fullViewSection.querySelector('.social__comment-count');
const loadComments = fullViewSection.querySelector('.comments-loader');

fullViewSection.classList.remove('hidden');
fullViewComments.innerHTML = '';
lineXofYComments.hidden = true;
loadComments.hidden = true;
document.body.classList.add('modal-open');

const fullViewLayout = (picData) => {
  const {url, likes, comments, description} = picData;

  fullViewUrl.setAttribute ('src',url);
  fullViewLikes.textContent = likes;
  fullViewCommentsNumber.textContent = comments.length;
  fullViewMessageForAudience.textContent = description;

  comments.forEach((feedback) => {
    const {avatar, message, name} = feedback;

    fullViewComments.insertAdjacentHTML (
      'beforeend',
      `<li class="social__comment">
      <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
      <p class="social__text">${message}</p>
      </li>`,
    );
  });
};

getData(URL_FOR_DATA).then((data) => data.slice(0, 1).forEach((datum) => fullViewLayout (datum)));

