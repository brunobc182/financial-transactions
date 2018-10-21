import React from 'react';
import styled from 'styled-components';
import { array, node, oneOfType } from 'prop-types';
import { moneyFormat, MESSAGES } from '../../utils';
import COLOR_PALLETE from '../../theme';

const { radicalRed, shamrock } = COLOR_PALLETE;
const { totalLabel } = MESSAGES;

const TransactionsTotal = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <TotalWrapper>
      <Total total={total}>
        {totalLabel}
        {moneyFormat(total)}
      </Total>
    </TotalWrapper>
  );
};

const TotalWrapper = styled.div`
  display: flex;
`;

const Total = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.5;
  color: ${({ total }) => (total >= 0 ? shamrock : radicalRed)};
`;

TransactionsTotal.propTypes = {
  data: oneOfType([node, array]).isRequired,
};

export default TransactionsTotal;
