import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NewsContainer from './NewsContainer';
import userEvent from '@testing-library/user-event';

describe('News Container', () => {
  it('Displays a list of articles', async () => {
    render(<NewsContainer />);
    screen.getAllByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'searchResult' });
    expect(ul).toMatchSnapshot();

    const searchInput = await screen.findByLabelText('Search for an article!');
    // userEvent.type(searchInput, expect.any(String));

    const submitButton = await screen.findByRole('button', {
      name: 'get-news',
    });

    userEvent.click(submitButton);

    await waitFor(() => {
      const yourNews = screen.getAllByTitle('theTitle');
      expect(yourNews).toHaveLength(5);
    });
  });
});
