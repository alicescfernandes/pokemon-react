// app.test.js
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import App from './App'
import '@testing-library/jest-dom/extend-expect'

test('renders pagination', () => {
  const history = createMemoryHistory()
  history.push('/')
  render(
    <Router history={history}>
      <App />
    </Router>);
  const pagination = screen.getByTestId('pagination')
  expect(pagination).toBeInTheDocument();
});



test('renders 6 blocks', () => {

  async () => {
    render(<App />);

    await waitFor(() => {
      console.log(1)
    }, {
      timeout: 1000
    });

    const pagination = screen.getByTestId('list_items');
    expect(pagination).toBeInTheDocument();
  }
});


test('render detail page', () => {
  async () => {
    const history = createMemoryHistory()
    history.push('/pokemon/1')
    render(
      <Router history={history}>
        <App />
      </Router>);
    waitFor();
    const detail = screen.getByTestId('pokemon_detail');
    expect(detail).toBeInTheDocument();
  }
})


test('render error page', () => {
  async () => {
    const history = createMemoryHistory();
    history.push('/pokemon/random_name');
    render(
      <Router history={history}>
        <App />
      </Router>);

    waitFor();
    const error = screen.getByTestId('error');
    expect(error).toBeInTheDocument();
  }


})
