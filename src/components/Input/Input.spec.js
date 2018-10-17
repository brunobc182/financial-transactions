import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

jest.mock('react-currency-input');

describe('Input', () => {
  const props = {
    value: '10',
    onChange: Function,
  };
  it('should render correctly', () => {
    const tree = renderer.create(<Input {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
