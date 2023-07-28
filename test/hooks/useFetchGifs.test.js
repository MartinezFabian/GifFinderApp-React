import { renderHook } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

/* eslint-disable no-undef */
describe('tests in useFetchGifs.js', () => {
  test('must return initial state', () => {
    const { result } = renderHook(() => {
      return useFetchGifs('messi');
    });

    expect(result.current).toEqual({
      gifs: [],
      isLoading: true,
    });
  });
});
