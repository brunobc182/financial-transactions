import React from 'react';
import styled from 'styled-components';
import { node, array, oneOfType } from 'prop-types';
import colors from '../../theme/colors';

const TransactionList = ({ data }) => (
  <ListWrapper>
    {data && data.map(({ type, value }) => <ListItem type={type}>{value}</ListItem>)}
  </ListWrapper>
);
const ListWrapper = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  font-size: 22px;
  color: ${colors.white};
  background-color: ${({ type }) => (type === 'DEBIT' ? colors.radicalRed : colors.shamrock)};
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  margin: 5px 0;
  border-radius: 4px;
`;

TransactionList.propTypes = {
  data: oneOfType([node, array]).isRequired,
};
export default TransactionList;
