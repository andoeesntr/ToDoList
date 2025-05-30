// src/__tests__/TodoInput.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from '../components/TodoInput';

describe('TodoInput Component', () => {
  test('adds new todo when form is submitted', () => {
    const mockOnAdd = jest.fn(); // fungsi palsu untuk ngetes pemanggilan
    render(<TodoInput onAdd={mockOnAdd} />);

    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');

    // Simulasi: user mengetik di input
    fireEvent.change(input, { target: { value: 'Belajar Unit Test' } });

    // Simulasi: user klik tombol tambah
    fireEvent.click(button);

    // Validasi: fungsi onAdd() dipanggil dengan isi todo
    expect(mockOnAdd).toHaveBeenCalledTimes(1);
    expect(mockOnAdd).toHaveBeenCalledWith('Belajar Unit Test');

    // Validasi: input dikosongkan setelah submit
    expect(input.value).toBe('');
  });
});
