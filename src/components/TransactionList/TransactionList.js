import React from 'react';
import styled from 'styled-components';
import {
  node, array, oneOfType, func,
} from 'prop-types';
import colors from '../../theme/colors';
import { moneyFormat } from '../../utils';

const TransactionList = ({ data, onClick }) => (
  <ListWrapper>
    {data
      && data.map(({ type, value }, index) => (
        <ListItem key={`id${data.length - index}`} id={index} type={type}>
          <ListItemContent>{moneyFormat(value, '$')}</ListItemContent>
          <DeleteButton type="button" onClick={() => onClick(index)}>
            X
          </DeleteButton>
        </ListItem>
      ))}
  </ListWrapper>
);
const ListWrapper = styled.ol`
  width: 100%;
  padding: 0;
`;

const ListItem = styled.li`
  position: relative;
  list-style-position: inside;
  padding-left: 20px;
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

const DeleteButton = styled.button`
  position: absolute;
  right: 0;
  margin: 10px;
  border-radius: 100%;
  color: white;
  background: transparent;
  border: 2px solid white;
  width: 30px;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
`;

TransactionList.propTypes = {
  data: oneOfType([node, array]).isRequired,
  onClick: func.isRequired,
};
export default TransactionList;
