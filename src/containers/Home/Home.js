import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Button, Input, TransactionList, TransactionsTotal,
} from '../../components';
import { TRANSACTION_TYPE, getItem, setItem } from '../../utils';

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
  }

  componentDidMount() {
    this.setState({
      transactions: getItem('transactions') || [],
    });
  }

  componentDidUpdate() {
    const { transactions } = this.state;
    // console.log('Chamou did update', transactions);
    setItem('transactions', transactions);
  }

  handleChange(event, maskedvalue, floatvalue) {
    this.setState({
      amount: floatvalue,
    });
  }

  handleDeleteTransaction(event) {
    // console.log(event);
    this.setState((prevState) => {
      const newTransactions = prevState.transactions.filter((value, index) => event !== index);
      return { transactions: newTransactions };
    });
  }

  handleNewTransaction(type) {
    const { amount } = this.state;
    const handleDebitValue = type === DEBIT ? -amount : amount;

    this.setState(prevState => ({
      amount: 0,
      transactions: [...prevState.transactions, { type, value: handleDebitValue }],
    }));
  }

  render() {
    const { amount, transactions } = this.state;
    const disabledButton = amount <= 0;
    return (
      <Wrapper>
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
          <TransactionList data={transactions} onClick={this.handleDeleteTransaction} />
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: 100%;
  margin: 30px 0 10px 0;
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
