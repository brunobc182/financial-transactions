import React, { Component } from 'react';
import { Container, Input } from '../../presentational';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Input />
      </Container>
    );
  }
}
