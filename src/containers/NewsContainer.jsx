import React, { Component } from 'react';
import { fetchNews, searchNews } from '../../services/NewsApi';
import ArticleList from '../components/articles/ArticleList';
import Controls from '../components/articles/Controls';

class NewsContainer extends Component {
  state = {
    loading: true,
    news: [],
    query: '',
  };

  async componentDidMount() {
    const news = await fetchNews();
    //make sure to pass the empty string into the function
    this.setState({
      news,
      loading: false,
    });
  }

  queryOnChange = (event) => {
    console.log(event.target.value);
    this.setState({
      query: event.target.value,
    });
  };

  queryOnSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });

    const searchQuery = this.state.query;
    const results = await searchNews(searchQuery);

    this.setState({
      news: results,
      loading: false,
    });
  };

  render() {
    const { loading, news, query } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <>
        <Controls
          query={query}
          onChange={this.queryOnChange}
          onSubmit={this.queryOnSubmit}
        />
        <ArticleList news={news} />
      </>
    );
  }
}

export default NewsContainer;
