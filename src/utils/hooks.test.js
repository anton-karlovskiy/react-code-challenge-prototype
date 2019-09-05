
import { renderHook, act } from '@testing-library/react-hooks';
import { useEffectiveConnectionType } from './hooks';

describe('useEffectiveConnectionType', () => {
  test('should return 4g of effectiveConnectionType', () => {
    global.navigator.connection = {
      effectiveType: '4g',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    };

    const { result } = renderHook(() => useEffectiveConnectionType());
    
    expect(result.current.effectiveConnectionType).toEqual('4g');
  });

  test('should update the effectiveConnectionType state', () => {
    global.navigator.connection = {
      effectiveType: '2g',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    };

    const { result } = renderHook(() => useEffectiveConnectionType());
  
    act(() => result.current.updateECTStatus());
  
    expect(result.current.effectiveConnectionType).toEqual('2g');
  });

  test('should update the effectiveConnectionType state when navigator.connection change event', () => {
    const map = {};
    global.navigator.connection = {
      effectiveType: '2g',
      addEventListener: jest.fn().mockImplementation((event, callback) => {
        map[event] = callback;
      }),
      removeEventListener: jest.fn()
    };

    const { result } = renderHook(() => useEffectiveConnectionType());
    global.navigator.connection.effectiveType = '4g';
    act(() => map.change());

    expect(result.current.effectiveConnectionType).toEqual('4g');
  });
});
