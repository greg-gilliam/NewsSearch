import React, { Component } from 'react';
import { fetchNews } from '../../services/NewsApi';
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
    // where are we pulling the query from? state
    const searchQuery = this.state.query;
    // what are we going to do with the query?  call the fetchNews function and pass in the search query
    const results = await fetchNews(searchQuery);
    // update news in state with the new info from the api
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
        <ArticleList news={news} />;
      </>
    );
  }
}

export default NewsContainer;
