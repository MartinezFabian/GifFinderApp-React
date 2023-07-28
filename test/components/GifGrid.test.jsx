/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('tests in <GifGrid></GifGrid>', () => {
  const category = 'messi';

  test('must initially show the loader and category', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    const { getByTestId } = render(<GifGrid category={category}></GifGrid>);
    expect(getByTestId('loader')).toBeTruthy();
    expect(screen.getByText(category));
  });

  test('must show cards when gifs finish loading', () => {
    const gifsTest = [
      {
        id: '2sa23asd',
        title: 'messi Barcelona',
        url: 'https://messi/messi_barcelona.jpg',
      },
      {
        id: 'f42sfd3',
        title: 'messi Argentina',
        url: 'https://messi/messi_arg.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      gifs: gifsTest,
      isLoading: false,
    });

    render(<GifGrid category={category}></GifGrid>);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
