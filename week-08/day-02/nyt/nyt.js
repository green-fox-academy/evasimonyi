'use strict';

const API_BASE_URL = "http://api.nytimes.com/svc/search/v2/articlesearch.json"
let API_KEY = "?q=moon+landing+by+Apollo+11&page=1&sort=oldest&api-key=d0ce66e0e98e417b829cd0c22ed1f424"

const xhr = new XMLHttpRequest();
const container = document.querySelector('.container');

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    response.response.docs.forEach(e => {
      //minden 'visszakapott' cikknek letrehozok egy divet
      const div = document.createElement('div');
      div.classList.add('article');
      //a cikk cime, hiperhivatkozassal, rakattintva behozza az eredeti cikket
      const links = document.createElement('a');
      links.setAttribute('href', e.web_url);
      links.innerText = e.headline.main;
      //a cim ala jon a snippet, aminek letrehozok egy divet
      const snippet = document.createElement('div');
      snippet.innerText = e.snippet;
      //cim legalulra
      const pubdate = document.createElement('div');
      pubdate.innerText = e.pub_date;
      //mindet beleteszem a divbe
      div.appendChild(links);
      div.appendChild(snippet);
      div.appendChild(pubdate);
      
      container.appendChild(div);
    });
  };
}

xhr.open('GET', `${API_BASE_URL}${API_KEY}`);
xhr.send();