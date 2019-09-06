
import reducerCreator from './favorites';

describe('favorites reducer', () => {
  test('should return the initial state', () => {
      expect(reducerCreator(undefined, {})()).toEqual([]);
  });
});
