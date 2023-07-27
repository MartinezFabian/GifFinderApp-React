/* eslint-disable no-undef */
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('test in <AddCategory></AddCategory>', () => {
  test('must change the value of the input', () => {
    render(<AddCategory onNewCategory={() => {}}></AddCategory>);

    const inputText = screen.getByRole('textbox');

    const category = 'messi';

    fireEvent.input(inputText, { target: { value: category } });

    expect(inputText.value).toBe(category);
  });

  test('onNewCategory should be called with the input value ', () => {
    const inputValue = 'messi';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory}></AddCategory>);

    const inputText = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(inputText, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(inputText.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
});
