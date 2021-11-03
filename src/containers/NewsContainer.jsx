import React, { Component } from 'react';
import { fetchNews } from '../../services/NewsApi';

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
    return <div>Here are your top articles!</div>;
  }
}

export default NewsContainer;
