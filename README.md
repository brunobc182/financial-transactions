# Financial Transactions

A simple React application to input credit and debits transactions to keep your financials safe.

## Requirements

- NodeJS 8.11LTS or higher.

## How to use

To use the application you need to clone this repository and install all dependencies. Follow the steps below:

```bash
git clone git@github.com:brunobc182/financial-transactions.git
cd financial-transactions
npm install
```

And to run it execute:

```bash
npm start
```

## Production version

To build a production version, just execute:

```bash
npm run build
```

## Run tests

This application is configured with unity and E2E tests. To execute it see the commands below:

- Unity Tests

```bash
npm run test
```

- E2E Tests

```bash
npm run test:e2e
```

- Test Coverage

```bash
npm run test:coverage
```

## Notes

This project is configured to execute a pre-commit and pre-push hook git ([Husky](https://github.com/typicode/husky)) to follow a common code pattern among developers and to verify test coverage witch is set up with 80% of coverage, at least.

## Stack

- [React](https://reactjs.org/)
- [styled-components](https://www.styled-components.com/)
- [Jest](https://jestjs.io/en/)
- [Enzyme](https://github.com/airbnb/enzyme)
- [Sinon](https://sinonjs.org/)
- [Cypress](https://www.cypress.io/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Eslint with Airbnb Style Guide](https://github.com/airbnb/javascript)

## License

[MIT](https://github.com/brunobc182/financial-transactions/blob/master/LICENSE)
