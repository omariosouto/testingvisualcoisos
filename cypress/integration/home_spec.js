/* eslint-disable no-undef */
/// <reference types="Cypress" />


describe('TodoMVC', function() {
    beforeEach(function() {
      // Load our app before starting each test case
      cy.visit('localhost:3000')
    })
  
    it('Loads the TodoMVC app', function() {
      cy.get('.todoapp').should('exist')
      cy.percySnapshot()
    })
});  