
import reducerCreator from './gallery-images';

describe('gallery-images reducer', () => {
  test('should return the initial state', () => {
      expect(reducerCreator(undefined, {})()).toEqual({
        results: [],
        isFetching: false,
        isError: false,
        page: 0
      });
  });
});
