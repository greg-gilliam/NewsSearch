import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Article from './Article';

const ArticleList = ({ news }) => {
  const articleList = news.map((article) => (
    <li key={article.title}>
      <Article
        title={article.title}
        description={article.description}
        content={article.content}
      />
    </li>
  ));
  return <ul aria-label="searchResult">{articleList}</ul>;
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default ArticleList;
