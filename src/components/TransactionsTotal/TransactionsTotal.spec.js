import React from 'react';
import renderer from 'react-test-renderer';
import TransactionsTotal from './TransactionsTotal';

describe('TransactionsTotal', () => {
  const data = [
    {
      value: 10,
      type: 'DEBIT',
    },
  ];

  it('should render correctly', () => {
    const tree = renderer.create(<TransactionsTotal data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
