import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Button, Input, TransactionList, TransactionsTotal,
} from '../../components';
import {
  TRANSACTION_TYPE, getItem, setItem, LOCAL_STORAGE_NAME,
} from '../../utils';
import COLOR_PALLETE from '../../theme';

const { dodgerBlue } = COLOR_PALLETE;
const { CREDIT, DEBIT } = TRANSACTION_TYPE;

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      amount: 0,
      transactions: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNewTransaction = this.handleNewTransaction.bind(this);
    this.handleDeleteTransaction = this.handleDeleteTransaction.bind(this);
    this.handleParcialTotal = this.handleParcialTotal.bind(this);
  }

  componentDidMount() {
    this.setState({
      transactions: getItem(LOCAL_STORAGE_NAME) || [],
    });
  }

  componentDidUpdate() {
    const { transactions } = this.state;
    setItem(LOCAL_STORAGE_NAME, transactions);
  }

  handleChange(event, maskedvalue, floatvalue) {
    this.setState({
      amount: floatvalue,
    });
  }

  handleDeleteTransaction(event) {
    this.setState(({ transactions }) => {
      const newTransactions = transactions.filter((value, index) => event !== index);
      return { transactions: newTransactions };
    });
  }

  handleParcialTotal(handleDebitValue) {
    const { transactions } = this.state;
    const tempTotal = transactions.reduce((acc, item) => acc + item.value, 0);

    return tempTotal + handleDebitValue;
  }

  handleNewTransaction(type) {
    const { amount, transactions } = this.state;
    const handleDebitValue = type === DEBIT ? -amount : amount;
    const partialTotal = this.handleParcialTotal(handleDebitValue);

    this.setState(() => ({
      amount: 0,
      transactions: [...transactions, { type, value: handleDebitValue, partialTotal }],
    }));
  }

  render() {
    const { amount, transactions } = this.state;
    const disabledButton = amount <= 0;

    return (
      <Wrapper>
        <PageTitle>My Transactions</PageTitle>
        <Container>
          <Input value={amount} onChange={this.handleChange} />
          <ButtonWrapper>
            <Button onClick={() => this.handleNewTransaction(CREDIT)} disabled={disabledButton}>
              + Credit
            </Button>
            <Button
              onClick={() => this.handleNewTransaction(DEBIT)}
              disabled={disabledButton}
              isDebit
            >
              - Debit
            </Button>
          </ButtonWrapper>
        </Container>
        <TransactionsTotal data={transactions} />
        <ListWrapper>
          <TransactionList
            data={transactions}
            onClick={this.handleDeleteTransaction}
            hint="Delete Transaction"
          />
        </ListWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  color: ${dodgerBlue};
  margin: 30px 0;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.5;
  font-size: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: 100%;
  margin-bottom: 10px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const ListWrapper = styled.div`
  max-width: 460px;
  width: 100%;
`;
