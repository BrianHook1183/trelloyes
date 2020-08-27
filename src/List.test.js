import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
  // Smoke Test
  it('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  //  Snapshot Test
});