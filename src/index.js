import './sass/main.scss';
import axios from 'axios';

import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import API from './js/apiService';
import getRefs from './js/getRefs';
import cardTpl from './templates/card.hbs';
import getRootDir from 'parcel-bundler/lib/utils/getRootDir';

  defaultModules.set(PNotifyMobile, {});
 
  alert({
    text: 'Notice me, senpai!'
  });

const refs = {
  cardGallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('#more')
}

let currentPage = 1;
axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
  .then(posts => renderPostsCard(posts.data))
  .then(() => currentPage++)
  .catch(err => console.log(err));
  
const loadMoreBtn = (e) => {
  e.preventDefault()
  axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
  .then(posts => renderPostsCard(posts.data))
  .then(() => currentPage++)
  .catch (err => console.log(err));

}



function createItem({id, userId, title, body}) {
  const article = `<article>
  <div class="card">
    <div class="info">
        <p class="info-item">
            <i class="material-icons">ID:${id}</i>  
        </p>
        <p class="info-item">
            <i class="material-icons">UserId:${userId}</i>
        </p>
        <p class="info-item">
            <i class="material-icons">Title:${title}</i>
        </p>
        <p class="info-item">
            <i class="material-icons">Body:${body}</i>
        </p>
    </div>
</div>
</article>
`
refs.cardGallery.insertAdjacentHTML('beforeend', article)    
}

function renderPostsCard(arr) {
  arr.forEach(el => createItem(el))
}

refs.loadMore.addEventListener('click', loadMoreBtn)

///////////////////////////////////////////////////
// const refs = getRefs();

// API.fetchPosts()
//   .then(renderPostsCard)
//   .catch(onFetchError);

// function renderPostsCard(post) {
//     const markup = cardTpl(post);
//     //console.log(markup);
//     refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert('Упс, щось пішло не так');
// }
///////////////////////////////////////////////////////////////

// fetch('https://api.openweathermap.org/data/2.5/weather?appid=6f7c3a6f8e3ec51e0c958f8f8708d0f0')
// //fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch (err => console.log(err));
