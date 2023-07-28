import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

/* eslint-disable no-undef */
describe('tests in <GifGrid></GifGrid>', () => {
  const category = 'messi';

  test('must initially show the loader and category', () => {
    const { getByTestId } = render(<GifGrid category={category}></GifGrid>);
    expect(getByTestId('loader')).toBeTruthy();
    expect(screen.getByText(category));
  });
});
