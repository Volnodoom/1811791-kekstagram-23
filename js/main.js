import './modules/error-success-messages.js';
//import {getData} from './modules/send-get-data.js';
import './modules/thumbnails.js';
import './modules/fullscreen-pic.js';
import './utils/buttons-key-functionality.js';
//import './modules/correction-uploaded-photo.js';
console.log ('IAM HERER')
// const URL_FOR_DATA = 'https://23.javascript.pages.academy/kekstagram/data';

// getData(URL_FOR_DATA).then((data) => data.slice(0, 1));


const protoData = [
  {
    "id": 0,
    "url": "photos/1.jpg",
    "likes": 11,
    "comments": [
      {
        "id": 0,
        "avatar": "img/avatar-6.svg",
        "message": "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально. Непонятен один момент: как так-то?!",
        "name": "Степан"
      },
      {
        "id": 1,
        "avatar": "img/avatar-2.svg",
        "message": "Кадрирование просто никакое. Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%",
        "name": "Аким"
      },
      {
        "id": 2,
        "avatar": "img/avatar-2.svg",
        "message": "Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу. Всё отлично!",
        "name": "Аким"
      },
      {
        "id": 3,
        "avatar": "img/avatar-5.svg",
        "message": "Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать. Разве это композиция?! Что это за композиция?!",
        "name": "Тимур"
      },
      {
        "id": 4,
        "avatar": "img/avatar-6.svg",
        "message": "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Нормас.",
        "name": "Степан"
      },
      {
        "id": 5,
        "avatar": "img/avatar-5.svg",
        "message": "Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?! Горизонт завален.",
        "name": "Тимур"
      },
      {
        "id": 6,
        "avatar": "img/avatar-5.svg",
        "message": "Фига се! В целом всё неплохо. Но не всё.",
        "name": "Тимур"
      },
      {
        "id": 7,
        "avatar": "img/avatar-2.svg",
        "message": "Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута. Фокус размыт. Или это просто кто-то заляпал объектив?",
        "name": "Аким"
      },
      {
        "id": 8,
        "avatar": "img/avatar-6.svg",
        "message": "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Шоб я так жил!",
        "name": "Степан"
      }
    ],
    "description": "Если чётко сформулировать желание для Вселенной, то всё обязательно сбудется. Верьте в себя. Главное хотеть и мечтать..... / I've bought some potatoes."
  }];

  export {protoData};
