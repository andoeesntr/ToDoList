import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App'; // ⬅️ pastikan path-nya benar

test('renders app component', () => {
  render(<App />);
  expect(screen.getByText(/To Do List App By/i)).toBeInTheDocument();
});
