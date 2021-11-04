import React, { Component } from 'react';
import { render, screen } from '@testing-library/react';
import NewsContainer from './NewsContainer';

describe('News Container', () => {
  it('Displays a list of articles', async () => {
    render(<NewsContainer />);
    screen.getAllByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
