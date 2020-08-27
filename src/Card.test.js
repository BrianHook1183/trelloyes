import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
  // Smoke Test
  it('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  //  Snapshot Test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});