import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import fetchArticles from './fetch';

const API_KEY = '6138eaac2a634e919413c553b31f8cb6';
const URL = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-13&sortBy=publishedAt&apiKey=';
const DELAYED_URL = `http://slowwy.greenfox.academy/delay/1000/url/${URL}${API_KEY}`;

export default function Article() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const afterFetch = (response) => {
    setArticles(response.articles);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(DELAYED_URL, afterFetch)
  }, []);

  if (isLoading) {
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
