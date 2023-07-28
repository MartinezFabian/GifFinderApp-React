import { renderHook, waitFor } from '@testing-library/react';
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

  test('must return an array of gifs and isLoading in false', async () => {
    const { result } = renderHook(() => {
      return useFetchGifs('messi');
    });

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    expect(result.current.gifs.length).toBeGreaterThan(0);
    expect(result.current.isLoading).toBe(false);
  });
});
