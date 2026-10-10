import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { counterReducer } from '@/features/counterSlice';

export function renderWithStore(ui: React.ReactElement) {
  const store = configureStore({ reducer: { counter: counterReducer } });
  return { store, ...render(<Provider store={store}>{ui}</Provider>) };
}
