import './sass/main.scss';
import axios from 'axios';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import PostsApiService from './apiService';
import cardTpl from './templates/card.hbs';
import getRootDir from 'parcel-bundler/lib/utils/getRootDir';

  defaultModules.set(PNotifyMobile, {});
 
  alert({
    text: 'Notice me, senpai!'
  });
///////////////////////////////////////////////////
const refs = {
  cardContainer: document.querySelector('.gallery')
}

fetchPosts().then(renderPostsCard)
  .catch(err => console.log(err));

function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      return response.json();
    });
}

function renderPostsCard(post) {
    const markup = cardTpl(post);
    //console.log(markup);
    refs.cardContainer.innerHTML = markup;
}
///////////////////////////////////////////////////////////////

// fetch('https://api.openweathermap.org/data/2.5/weather?appid=6f7c3a6f8e3ec51e0c958f8f8708d0f0')
// //fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch (err => console.log(err));
