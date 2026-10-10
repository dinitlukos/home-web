import { act, renderHook } from '@testing-library/react';
import useBoolean from './useBoolean';

describe('useBoolean', () => {
  it('defaults to false', () => {
    const { result } = renderHook(() => useBoolean());
    expect(result.current.value).toBe(false);
  });

  it('supports setTrue, setFalse and toggle', () => {
    const { result } = renderHook(() => useBoolean(true));
    act(() => result.current.setFalse());
    expect(result.current.value).toBe(false);
    act(() => result.current.toggle());
    expect(result.current.value).toBe(true);
    act(() => result.current.setFalse());
    act(() => result.current.setTrue());
    expect(result.current.value).toBe(true);
  });
});
