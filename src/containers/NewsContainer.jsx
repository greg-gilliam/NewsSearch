import React, { Component } from 'react';
import { fetchNews } from '../../services/NewsApi';
import ArticleList from '../components/articles/ArticleList';

class NewsContainer extends React.Component {
  state = {
    loading: true,
    news: [],
  };

  async componentDidMount() {
    const news = await fetchNews();
    this.setState({
      news,
      loading: false,
    });
  }

  render() {
    const { loading, news } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }
    return <ArticleList news={news} />;
  }
}

export default NewsContainer;
