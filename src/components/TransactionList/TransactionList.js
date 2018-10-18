import React from 'react';
import styled from 'styled-components';
import { node, array, oneOfType } from 'prop-types';
import colors from '../../theme/colors';
import { moneyFormat } from '../../utils';

const TransactionList = ({ data }) => (
  <ListWrapper>
    {data
      && data.map(({ type, value }, index) => (
        <ListItem key={`id${data.length - index}`} type={type}>
          <ListItemContent>{moneyFormat(value, '$')}</ListItemContent>
        </ListItem>
      ))}
  </ListWrapper>
);
const ListWrapper = styled.ol`
  width: 100%;
  padding: 0;
`;

const ListItem = styled.li`
  text-align: center;
  list-style-position: inside;
  width: 100%;
  height: 48px;
  font-size: 22px;
  color: ${colors.white};
  background-color: ${({ type }) => (type === 'DEBIT' ? colors.radicalRed : colors.shamrock)};
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  margin: 5px 0;
  border-radius: 4px;
`;
const ListItemContent = styled.p`
  display: inline-block;
  margin: 10px;
  padding: 0;
`;

TransactionList.propTypes = {
  data: oneOfType([node, array]).isRequired,
};
export default TransactionList;
