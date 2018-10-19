describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a CREDIT transaction', () => {
    cy.get('input')
      .type(1000)
      .get('section > div > div > button')
      .contains('+ Credit')
      .click()
      .get('section > div > p')
      .should('have.text', 'Total: $ 10,00');
  });

  it('should add a DEBIT transaction', () => {
    cy.get('input')
      .type(1000)
      .get('section > div > div > button')
      .contains('- Debit')
      .click()
      .get('section > div > p')
      .should('have.text', 'Total: $ -10,00');
  });

  it('should show the total of transactions', () => {
    cy.get('input')
      .type(1000)
      .get('section > div > div > button')
      .contains('- Debit')
      .click()
      .get('input')
      .type(1000)
      .get('section > div > div > button')
      .contains('- Debit')
      .click()
      .get('input')
      .type(3000)
      .get('section > div > div > button')
      .contains('+ Credit')
      .click()
      .get('input')
      .type(1000)
      .get('section > div > div > button')
      .contains('- Debit')
      .click()
      .get('section > div > p')
      .should('have.text', 'Total: $ 0,00');
  });

  it('should delete a transaction', () => {
    cy.get('input')
      .type(1000)
      .get('section > div > div > button')
      .contains('- Debit')
      .click()
      .get('section > div > ol > li > button')
      .contains('X')
      .click()
      .get('section > div > p')
      .should('have.text', 'Total: $ 0,00');
  });
});
