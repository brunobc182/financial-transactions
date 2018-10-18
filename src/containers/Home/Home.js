import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Button, Input, TransactionList, TransactionsTotal,
} from '../../components';
import { TRANSACTION_TYPE } from '../../utils';

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
  }

  handleChange(event, maskedvalue, floatvalue) {
    this.setState({
      amount: floatvalue,
    });
  }

  handleNewTransaction(type) {
    const { amount } = this.state;
    const handleDebitValue = type === DEBIT ? -amount : amount;

    this.setState(prevState => ({
      transactions: [...prevState.transactions, { type, value: handleDebitValue }],
    }));
  }

  render() {
    const { amount, transactions } = this.state;
    return (
      <Wrapper>
        <Container>
          <Input value={amount} onChange={this.handleChange} />
          <ButtonWrapper>
            <Button onClick={() => this.handleNewTransaction(CREDIT)}>+ Credit</Button>
            <Button onClick={() => this.handleNewTransaction(DEBIT)} isDebit>
              - Debit
            </Button>
          </ButtonWrapper>
        </Container>
        <ListWrapper>
          <TransactionList data={transactions} />
        </ListWrapper>
        <TransactionsTotal data={transactions} />
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
  margin-top: 30px;
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
