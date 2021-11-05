import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article.jsx';

export default function Controls({ query, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="inputField">Search for an article!</label>
      <input
        id="inputField"
        name="inputField"
        type="text"
        value={query}
        onChange={(event) => onChange(event)}
      />
      <button>Submit</button>
    </form>
  );
}

Controls.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
