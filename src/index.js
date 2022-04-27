import './sass/main.scss';
import axios from 'axios';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';

import getRootDir from 'parcel-bundler/lib/utils/getRootDir';

  defaultModules.set(PNotifyMobile, {});
 
  alert({
    text: 'Notice me, senpai!'
  });

const refs = {
  cardGallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('#more'),
  openComment: document.querySelector('.comment')
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

function createPost({id, userId, title, body}) {
  const article = `<article>
        <div class="card" onclick="window.open('./partials/comment.html', '_blank')">
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
      </article>`
refs.cardGallery.insertAdjacentHTML('beforeend', article)
}

function renderPostsCard(arr) {
  arr.forEach(el => createPost(el))
}

refs.loadMore.addEventListener('click', loadMoreBtn)

axios.get ('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(comments => renderPostItem(comments.data))

// const postInfo = (e) => {
//   e.preventDefault()
//   axios.get ('https://jsonplaceholder.typicode.com/posts/1/comments')
//   .then(comments => renderPostItem(comments.data))
//   .then((json) => console.log(json));

// }

function createPostItem({ id, body, postId, name, email}) {
  const article = `<article>
        <div class="card">
          <div class="info">
              <p class="info-item">
                  <i class="material-icons">Comment:${id}</i>  
              </p>
                <p class="info-item">
                  <i class="material-icons">PostId:${postId}</i>  
              </p>
          </div>
          <div class="info">
              
              <p class="info-item">
                  <i class="material-icons">Name:${name}</i>
              </p>
              <p class="info-item">
                  <i class="material-icons">Email:${email}</i>
              </p>
              <p class="info-item">
                  <i class="material-icons">Body:${body}</i>
              </p>
          </div>
      </div>
      </article>`
  refs.openComment.insertAdjacentHTML('beforeend', article)  
}

function renderPostItem(arr) {
  arr.forEach(el => createPostItem(el))
}

//refs.openComment.addEventListener('click', postInfo)
// document.addEventListener('click', openComment).onclick = function openComment() {
//     window.location.replace = './partials/comment.html'
// }

// function openCommentClick() {
//   return window.document.open('./partials/comment.html')
// }
// refs.openComment.addEventListener('click', openCommentClick)

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));



// fetch('https://api.openweathermap.org/data/2.5/weather?appid=6f7c3a6f8e3ec51e0c958f8f8708d0f0')
// //fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch (err => console.log(err));
