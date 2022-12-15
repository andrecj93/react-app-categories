import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders smart text category', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/smart text/i);
  expect(linkElement).toBeInTheDocument();
});