import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { TRANSACTION_TYPE } from '../../utils';
import TransactionList from './TransactionList';

describe('TransactionList', () => {
  const { CREDIT, DEBIT } = TRANSACTION_TYPE;
  const data = [
    {
      value: 10,
      type: CREDIT,
    },
  ];
  it('should render correctly', () => {
    const tree = renderer.create(<TransactionList data={data} onClick={Function} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with type DEBIT prop', () => {
    const newData = [
      {
        value: 10,
        type: DEBIT,
      },
    ];
    const tree = renderer
      .create(<TransactionList data={newData} onClick={Function} isDebit />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onClick function', () => {
    const spy = sinon.spy();
    const tree = mount(<TransactionList data={data} onClick={spy} />);
    tree.find('button').simulate('click');
    expect(spy.called).toBe(true);
  });
});
