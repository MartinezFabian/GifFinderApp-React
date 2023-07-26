/* eslint-disable no-undef */
import { fetchGIFsByCategory } from '../../src/helpers/fetchGIFsByCategory';

describe('test in fetchGIFsByCategory.js', () => {
  const category = 'messi';

  test('must return an array of gifs', async () => {
    const gifs = await fetchGIFsByCategory(category);
    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
