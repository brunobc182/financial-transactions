import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

Container.propTypes = {
  children: node.isRequired,
};

export default Container;
