import { render, screen } from '@testing-library/react';
import { GifCard } from '../../src/components/GifCard';

/* eslint-disable no-undef */
describe('tests in <GifCard />', () => {
  const title = 'messi';
  const url = 'https://messi.com/messi.jpg';

  test('must match the snapshot', () => {
    const { container } = render(<GifCard title={title} url={url}></GifCard>);

    expect(container).toMatchSnapshot();
  });

  test('the image must show the url and the alt', () => {
    render(<GifCard title={title} url={url}></GifCard>);

    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('must show the title', () => {
    render(<GifCard title={title} url={url}></GifCard>);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
