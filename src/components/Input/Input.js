import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import colors from '../../theme/colors';

const Input = ({ placeholder, onChange }) => (
  <InputComponent placeholder={placeholder} onChange={onChange} />
);

const InputComponent = styled.input`
  height: 48px;
  border: none;
  padding: 10px 15px;
  font-size: 22px;
  color: ${colors.pickledBluewood};
  line-height: 1.5;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  outline: none;
`;

Input.propTypes = {
  placeholder: string,
  onChange: func,
};

Input.defaultProps = {
  placeholder: 'Placeholder',
  onChange: null,
};

export default Input;
