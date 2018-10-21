import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Home from './Home';
import { TRANSACTION_TYPE } from '../../utils';

jest.mock('react-currency-input');

describe('Home', () => {
  const { CREDIT, DEBIT } = TRANSACTION_TYPE;

  const initialState = {
    amount: 0,
    transactions: [],
  };

  it('should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should change the amount value', () => {
    const tree = mount(<Home />);
    const value = 1.12;

    tree.setState({ ...initialState });
    tree
      .find('Home')
      .instance()
      .handleChange(null, null, value);

    expect(tree.state().amount).toBe(1.12);
  });

  it('should delete a transaction', () => {
    const tree = mount(<Home />);
    const index = 0;
    const newTransactions = [
      {
        type: DEBIT,
        value: -1,
      },
    ];

    tree.setState({
      ...initialState,
      transactions: [
        {
          type: CREDIT,
          value: 10,
        },
        {
          type: DEBIT,
          value: -1,
        },
      ],
    });

    tree
      .find('Home')
      .instance()
      .handleDeleteTransaction(index);

    expect(tree.state().transactions).toEqual(newTransactions);
  });

  it('should add a new CREDIT transaction', () => {
    const tree = mount(<Home />);
    const newTransactions = [
      {
        type: CREDIT,
        value: 10,
      },
    ];

    tree.setState({
      ...initialState,
      amount: 10,
    });

    tree
      .find('Home')
      .instance()
      .handleNewTransaction(CREDIT);

    expect(tree.state().transactions).toEqual(newTransactions);
  });

  it('should add a new DEBIT transaction', () => {
    const tree = mount(<Home />);
    const newTransactions = [
      {
        type: DEBIT,
        value: -90,
      },
    ];

    tree.setState({
      ...initialState,
      amount: 90,
    });

    tree
      .find('Home')
      .instance()
      .handleNewTransaction(DEBIT);

    expect(tree.state().transactions).toEqual(newTransactions);
  });
});
