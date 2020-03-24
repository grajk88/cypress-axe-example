/// <reference types="cypress" />

describe('Home', () => {

    it('should be accessible', () => {
        
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.injectAxe()
      cy.checkA11y()
    })
  })