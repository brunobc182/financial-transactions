import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Container, Input } from '../../components';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      amount: '0',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, maskedvalue) {
    this.setState({ amount: maskedvalue });
  }

  render() {
    const { amount } = this.state;
    return (
      <Container>
        <Input value={amount} onChange={this.handleChange} />
        <ButtonWrapper>
          <Button>+ Credit</Button>
          <Button isDebit>- Debit</Button>
        </ButtonWrapper>
      </Container>
    );
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
`;
