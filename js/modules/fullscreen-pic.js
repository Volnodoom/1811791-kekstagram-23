import { getData } from './send-get-data.js';

const URL_FOR_DATA = 'https://23.javascript.pages.academy/kekstagram/data';
const STARTS_FROM = 0;
const FIRST_COMMENTS_5 = 5;
const FIRST_COMMENTS_10 = 10;

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
document.body.classList.add('modal-open');

const isCommentsBoxEmpty = () => {
  lineXofYComments.hidden = true;
  loadComments.hidden = true;
};

const fullViewLayout = (picData) => {
  const {url, likes, comments, description} = picData;

  fullViewUrl.setAttribute ('src',url);
  fullViewLikes.textContent = likes;
  const feedbackNum = comments.length;
  fullViewCommentsNumber.textContent = feedbackNum;
  fullViewMessageForAudience.textContent = description;

  const uploadingMessages = (firstMessage = STARTS_FROM, getNmessages = FIRST_COMMENTS_5) => {

    comments.slice(firstMessage, getNmessages).forEach((feedback) => {
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

  if (feedbackNum <= FIRST_COMMENTS_5) {
    uploadingMessages();
    isCommentsBoxEmpty();
  } else {
    uploadingMessages();
  }

  const addCommentLoaderClickHandler = (startInComments, endInComments, step, domElement, lengthOfTheComments) => {
    let start = startInComments;
    let end = endInComments;
    domElement.addEventListener('click', () => {
      if (lengthOfTheComments <= end) {
        uploadingMessages(start, end);
        isCommentsBoxEmpty();
      } else {
        uploadingMessages(start, end);
        lineXofYComments.firstChild.textContent = `${end} из `;
        start += step;
        end += step;
      }
    });
  };

  for (let ind = 5; ind <= feedbackNum; ind+=5) {
    addCommentLoaderClickHandler(FIRST_COMMENTS_5, FIRST_COMMENTS_10, ind, loadComments, feedbackNum);
    break;
  }
};

getData(URL_FOR_DATA).then((data) => data.slice(3, 4).forEach((datum) => fullViewLayout (datum)));
