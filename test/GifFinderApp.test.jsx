import { fireEvent, render, screen } from '@testing-library/react';
import { GifFinderApp } from '../src/GifFinderApp';

/* eslint-disable no-undef */
describe('tests in <GifFinderApp></GifFinderApp>', () => {
  test('A repeated category should not be added', () => {
    render(<GifFinderApp></GifFinderApp>);

    const inputText = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(inputText, { target: { value: 'messi' } });
    fireEvent.submit(form);

    fireEvent.input(inputText, { target: { value: 'messi' } });
    fireEvent.submit(form);

    expect(screen.getAllByText('messi').length).toBe(1);
  });
});
