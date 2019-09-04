// 'use strict';

// const API_BASE_URL = "http://api.nytimes.com/svc/search/v2/articlesearch.json";

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
//       const response = JSON.parse(xhr.responseText);
//       const article = document.querySelector('.article');
//       console.log(response);

//       response.response.docs.forEach(e => {

//         const div = document.createElement('div');
//         div.classList.add('post');

//         const links = document.createElement('a');
//         links.setAttribute('href', e.web_url);
//         links.innerText = e.headline.main;
//         // console.log(links);

//         const snippet = document.createElement('div');
//         snippet.innerText = e.snippet;

//         const pubdate = document.createElement('div');
//         pubdate.innerText = e.pub_date.slice(0, 10);

//         div.appendChild(links);
//         div.appendChild(snippet);
//         div.appendChild(pubdate);

//         article.appendChild(div);
//       })
//     }
//   };
// }

// xhr.open('GET', `${API_BASE_URL}?q=moon+landing+by+Apollo+11&page=1&sort=oldest&api-key=d0ce66e0e98e417b829cd0c22ed1f424`);
// xhr.send();
