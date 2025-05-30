// src/__tests__/TodoInput.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from '../components/TodoInput';

describe('TodoInput Component', () => {
  test('adds new todo when form is submitted', () => {
    const mockOnAdd = jest.fn(); // mock callback function
    render(<TodoInput onAdd={mockOnAdd} />);

    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');

    // Simulasi user mengetik dan submit
    fireEvent.change(input, { target: { value: 'Belajar React Testing' } });
    fireEvent.click(button);

    // Pastikan callback dipanggil dengan value yang benar
    expect(mockOnAdd).toHaveBeenCalledTimes(1);
    expect(mockOnAdd).toHaveBeenCalledWith('Belajar React Testing');

    // Pastikan input dikosongkan setelah submit
    expect(input.value).toBe('');
  });
});
