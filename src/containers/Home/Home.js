import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Input, TransactionList } from '../../components';

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

  handleNewTransaction() {
    const { amount } = this.state;
    this.setState(prevState => ({
      transactions: [...prevState.transactions, { type: 'DEBIT', value: amount }],
    }));
  }

  render() {
    const { amount, transactions } = this.state;
    return (
      <Wrapper>
        <Container>
          <Input value={amount} onChange={this.handleChange} />
          <ButtonWrapper>
            <Button onClick={this.handleNewTransaction}>+ Credit</Button>
            <Button onClick={this.handleNewTransaction} isDebit>
              - Debit
            </Button>
          </ButtonWrapper>
        </Container>
        <ListWrapper>
          <TransactionList data={transactions} />
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
