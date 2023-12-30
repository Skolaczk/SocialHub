import { fireEvent, render, screen } from '@testing-library/react';

import { SearchBar } from '@/components';

describe('SearchBar component', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'michal' } });

    await screen.findByText(/michal/);
  });
});
