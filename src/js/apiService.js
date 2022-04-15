const BASE_URL = 'https://jsonplaceholder.typicode.com'

function fetchPosts() {
  
  return fetch(`${BASE_URL}/posts?limit=10`).then(response => response.json());
}

export default { fetchPosts };