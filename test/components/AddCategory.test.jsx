/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('test in <AddCategory></AddCategory>', () => {
  test('must change the value of the input', () => {
    render(<AddCategory onNewCategory={() => {}}></AddCategory>);

    const inputText = screen.getByRole('textbox');

    const category = 'messi';

    fireEvent.input(inputText, { target: { value: category } });

    expect(inputText.value).toBe(category);
  });
});
