import { counterReducer, decrement, increment } from './counterSlice';

describe('counterSlice', () => {
  it('starts at 0', () => {
    expect(counterReducer(undefined, { type: 'init' })).toEqual({ count: 0 });
  });

  it('increments and decrements by the payload', () => {
    let state = counterReducer(undefined, increment(5));
    expect(state.count).toBe(5);
    state = counterReducer(state, decrement(2));
    expect(state.count).toBe(3);
  });
});
