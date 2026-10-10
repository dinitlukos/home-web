import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStore } from '@/test/renderWithStore';
import Counter from './Counter';

describe('Counter', () => {
  it('increments and decrements the count', async () => {
    const user = userEvent.setup();
    const { store } = renderWithStore(<Counter />);

    await user.click(screen.getByRole('button', { name: 'Increment value' }));
    await user.click(screen.getByRole('button', { name: 'Increment value' }));
    await user.click(screen.getByRole('button', { name: 'Decrement value' }));

    expect(store.getState().counter.count).toBe(1);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
