import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

jest.mock('react-currency-input');

describe('Home', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
