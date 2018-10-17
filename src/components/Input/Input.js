import React from 'react';
import {
  func, oneOfType, string, number,
} from 'prop-types';
import styled from 'styled-components';
import CurrencyInput from 'react-currency-input';
import colors from '../../theme/colors';

const Input = ({
  placeholder, onChange, value, prefix, sufix,
}) => (
  <InputComponent
    placeholder={placeholder}
    onChangeEvent={onChange}
    value={value}
    type="tel"
    decimalSeparator=","
    thousandSeparator="."
    prefix={prefix}
    sufix={sufix}
    selectAllOnFocus
  />
);

const InputComponent = styled(CurrencyInput)`
  height: 48px;
  border: none;
  padding: 10px 15px;
  font-size: 22px;
  color: ${colors.pickledBluewood};
  line-height: 1.5;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  outline: none;
  border-radius: 4px;
`;

Input.propTypes = {
  placeholder: string,
  onChange: func,
  value: oneOfType([string, number]),
  prefix: string,
  sufix: string,
};

Input.defaultProps = {
  placeholder: 'Placeholder',
  onChange: null,
  value: '0.00',
  sufix: '',
  prefix: '$ ',
};

export default Input;
