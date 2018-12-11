const API_BASE_URL = "http://api.nytimes.com/svc/search/v2/articlesearch.json"

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);

      const headline = document.querySelector('.headline');
      const snippet = document.querySelector('.snippet');
      const publicationDate = document.querySelector('.pubdate');

      console.log(response.response.docs);

      response.response.docs.forEach(e => {
        console.log(e.snippet);
        console.log(e.headline);
        console.log(e.pub_date);

      })
    }
  };
}

xhr.open('GET', `${API_BASE_URL}?q=moon+landing+by+Apollo+11&page=2&sort=oldest&api-key=d0ce66e0e98e417b829cd0c22ed1f424`);
xhr.send();