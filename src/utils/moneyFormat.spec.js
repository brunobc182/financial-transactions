import moneyFormat from './moneyFormat';

describe('Money Format', () => {
  it('should format a number', () => {
    expect(moneyFormat(2)).toBe('$ 2,00');
    expect(moneyFormat(0.1)).toBe('$ 0,10');
    expect(moneyFormat(18.9, 'R$')).toBe('R$ 18,90');
    expect(moneyFormat(1231.2, 'R$')).toBe('R$ 1.231,20');
  });
});
