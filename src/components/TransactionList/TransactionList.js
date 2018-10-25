import React from 'react';
import styled from 'styled-components';
import {
  node, array, oneOfType, func, string,
} from 'prop-types';
import COLOR_PALLETE from '../../theme';
import { moneyFormat, TRANSACTION_TYPE, MESSAGES } from '../../utils';

const { partialTotalLabel } = MESSAGES;
const { radicalRed, shamrock, white } = COLOR_PALLETE;

const TransactionList = ({ data, onClick, hint }) => (
  <ListWrapper>
    {data
      && data.map(({ type, value, partialTotal }, index) => (
        <ListItem key={`id${data.length - index}`} id={index} type={type}>
          <ListItemContent>{moneyFormat(value)}</ListItemContent>
          <DeleteButton type="button" onClick={() => onClick(index)} hint={hint}>
            X
          </DeleteButton>
          <PartialTotal id={`partialTotal${index}`}>
            {partialTotalLabel}
            {moneyFormat(partialTotal)}
          </PartialTotal>
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
  height: 80px;
  font-size: 22px;
  color: ${white};
  background-color: ${({ type }) => (type === TRANSACTION_TYPE.DEBIT ? radicalRed : shamrock)};
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  margin: 5px 0;
  border-radius: 4px;
`;

const PartialTotal = styled.p`
  margin: 0;
`;

const ListItemContent = styled.p`
  display: inline-block;
  margin: 10px;
  padding: 0;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 0;
  margin: 25px;
  border-radius: 100%;
  color: ${white};
  background: transparent;
  border: 2px solid ${white};
  width: 30px;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
`;

TransactionList.propTypes = {
  data: oneOfType([node, array]).isRequired,
  onClick: func.isRequired,
  hint: string,
};

TransactionList.defaultProps = {
  hint: 'Hint',
};

export default TransactionList;
