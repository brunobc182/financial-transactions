const moneyFormat = (number, prefix = '$') => `${prefix} ${number
  .toFixed(2)
  .replace(/(\d)(?=(\d{3})+\.)/g, '$1.')
  .replace(/\.(\d{2})$/, ',$1')}`;

export default moneyFormat;
