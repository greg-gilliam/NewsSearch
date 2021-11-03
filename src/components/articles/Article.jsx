import React, { Component } from 'react';

const Article = ({ title, description, content }) => (
  <article>
    <p>{title}</p>
    <p>{description}</p>
    <p>{content}</p>
  </article>
);

export default Article;
