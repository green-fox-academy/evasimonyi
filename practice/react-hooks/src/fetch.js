export default function fetchArticles(url, callback) {
  return fetch(url)
    .then(res => res.json())
    .then(callback)
    .catch(error => console.log(error))
}
