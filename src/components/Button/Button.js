import React from 'react';
import {
  bool, func, node, string,
} from 'prop-types';
import styled from 'styled-components';
import colors from '../../theme/colors';

const Button = ({
  children, onClick, type, isDebit, disabled,
}) => (
  <ButtonComponent type={type} onClick={onClick} isDebit={isDebit} disabled={disabled}>
    {children}
  </ButtonComponent>
);

const ButtonComponent = styled.button`
  width: 100%;
  height: 40px;
  margin: 0 5px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  background: ${({ isDebit }) => (isDebit ? colors.radicalRed : colors.shamrock)};
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 12px;
  text-transform: uppercase;

  :hover {
    background: ${({ isDebit }) => (isDebit ? colors.cinnabar : colors.emerald)};
  }

  :active {
    position: relative;
    top: 1px;
  }

  :disabled {
    background: ${({ isDebit }) => (isDebit ? colors.cinnabar : colors.emerald)};
    opacity: 0.5;
  }
`;

Button.propTypes = {
  children: node,
  isDebit: bool,
  onClick: func,
  type: string,
  disabled: bool,
};

Button.defaultProps = {
  children: 'Button text',
  isDebit: false,
  onClick: null,
  type: 'button',
  disabled: false,
};

export default Button;
