import React from 'react';
import renderer from 'react-test-renderer';
import TransactionList from './TransactionList';

describe('TransactionList', () => {
  const data = [
    {
      value: 10,
      type: 'DEBIT',
    },
  ];

  it('should render correctly', () => {
    const tree = renderer.create(<TransactionList data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
