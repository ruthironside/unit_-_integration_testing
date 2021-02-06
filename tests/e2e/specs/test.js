// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should have working number buttons', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
  });

  it('should have working number buttons', () => {
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
  });

  it('should have working number buttons', () => {
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  });

  it('should have working number buttons', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  });

  it('should have working number buttons', () => {
    cy.get('#number6').click();
    cy.get('.display').should('contain', '6')
  });

  it('should have working number buttons', () => {
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
  });

  it('should have working number buttons', () => {
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
  });

  it('should have working number buttons', () => {
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
  });

  it('should have working number buttons', () => {
    cy.get('#number0').click();
    cy.get('.display').should('contain', '0')
  });

  //1.
  it('the number buttons update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3')
  });

  //2.
  it('the arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '12')
  });

  //3.
  it('multiple operations can be chained together?', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '12')
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '13')
  });

  //4.
  it('the output as expected for a range of numbers (minus)', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4')
  });

  it('the output as expected for a range of numbers (positive)', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '10')
  });

  it('the output as expected for a range of numbers (decimals)', () => {
    cy.get('#number7').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3.5')
  });

  it('the output as expected for a range of numbers (large numbers)', () => {
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '27777775')
  });

  //5.
  it('should give an error if divided by zero', () => {
    cy.get('#number7').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', "You can't divide by 0")
  });
})


