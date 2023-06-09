/// <reference types="cypress" />

import { MAIN_URL } from "../consts";

describe('Daily card', () => {
    beforeEach(()=>{
      cy.visit(MAIN_URL);
      cy.get('[data-testid="in-time"]').clear();
      cy.get('[data-testid="out-time"]').clear();
    })
    it('update card - correctly', () => {
     
      cy.get('[data-testid="in-time"]').type('10:00');
      cy.get('[data-testid="out-time"]').type('11:00');
      cy.get('[data-testid="set-card"]').click();
      cy.get('div').contains('Card updated').should('exist');
    });

    it('update card - error', () => {
        cy.get('[data-testid="in-time"]').type('xxx');
        cy.get('[data-testid="set-card"]').click();
        cy.get('div').contains('Card updated').should('not.exist');
        cy.get('div').contains('Error').should('exist');
      })
  })