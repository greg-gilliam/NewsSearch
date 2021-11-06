import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NewsContainer from './NewsContainer';
import userEvent from '@testing-library/user-event';
import Article from '../components/articles/Article';
import Controls from '../components/articles/Controls';

describe('News Container', () => {
  it('Displays a list of articles', async () => {
    render(<NewsContainer />);
    screen.getAllByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'searchResult' });
    expect(ul).toMatchSnapshot();

    const searchInput = await screen.findByLabelText('Search for an article!');

    const submitButton = await screen.findByRole('button', {
      name: 'get-news',
    });

    userEvent.click(submitButton);

    await waitFor(() => {
      const yourNews = screen.getAllByTitle('theTitle');
      expect(yourNews).toHaveLength(5);
    });
  });

  it('Displays an article', () => {
    const { asFragment } = render(<Article title="theTitle" />);
    expect(asFragment()).toMatchSnapshot();
  });

  // it('Should search', () => {
  //   const { asFragment } = render(
  //     <Controls onSubmit="news" query="news" onChange="news" />
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });
});
