import React, { useEffect, useState } from 'react';
import Loader from './loader';

const API_KEY = '6138eaac2a634e919413c553b31f8cb6';
const URL = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-13&sortBy=publishedAt&apiKey=';
const DELAYED_URL = `http://slowwy.greenfox.academy/delay/2000/url/${URL}${API_KEY}`;

export default function Article() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(DELAYED_URL)
      .then(res => res.json())
      .then(response => {
        setArticles(response.articles);
        setLoading(false);
      })
      .catch(error => console.log(error))
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      articles.map((article, index) => {
        return (
          <article key={index}>
            <h1>{article.author}</h1>
            <p>{article.content}</p>
          </article>
        )
      })
    )
  }
}
