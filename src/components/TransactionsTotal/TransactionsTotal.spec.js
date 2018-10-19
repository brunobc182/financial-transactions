import React from 'react';
import renderer from 'react-test-renderer';
import { TRANSACTION_TYPE } from '../../utils';

import TransactionsTotal from './TransactionsTotal';

describe('TransactionsTotal', () => {
  const { CREDIT, DEBIT } = TRANSACTION_TYPE;
  const positiveData = [
    {
      value: 10,
      type: CREDIT,
    },
  ];

  it('should render correctly when the total of velues is positive', () => {
    const tree = renderer.create(<TransactionsTotal data={positiveData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when the total of velues is positive', () => {
    const negativeData = [
      {
        value: -10,
        type: DEBIT,
      },
    ];
    const tree = renderer.create(<TransactionsTotal data={negativeData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
