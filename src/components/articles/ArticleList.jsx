import React, { Component } from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
  const articleList = articles.map((article) => (
    <li key={article.title}>
      <Article
        title={article.title}
        description={article.description}
        content={article.content}
      />
    </li>
  ));
  return <ul>{ArticleList}</ul>;
};

export default ArticleList;
