import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Container, Input } from '../../components';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Input />
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
