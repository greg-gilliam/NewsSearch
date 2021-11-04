import PropTypes from 'prop-types';
import React, { Component } from 'react';

const Article = ({ title, description, content }) => (
  <article>
    <p>{title}</p>
    <p>{description}</p>
    <p>{content}</p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
