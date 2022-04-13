// export default class PostsApiService {
//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
//     }
//     fetchPosts() {
//         const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

//         const url = `${BASE_URL}`;
//         return fetch(url)
//             .then(response => response.json());
//     }
//     get query() {
//         return this.searchQuery;
//     }
//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     }
// }