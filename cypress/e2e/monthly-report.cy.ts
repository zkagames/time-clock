/// <reference types="cypress" />

import { MAIN_URL } from "../consts";

describe('Monthly report', () => {
    it('show correct total & table data', () => {
        cy.visit(`${MAIN_URL}all`);
        cy.get('[data-testid="total"]').contains('Total hours 7').should('exist');
    
        const NUM_OF_CARDS = 3;
        cy.get('[data-testid="table-row"]').should('have.length', NUM_OF_CARDS);

        cy.get('[data-testid="table-row"]').eq(0).should('contain', '10/05/2023');
      }); 

      it('click sort table data', () => {
        cy.visit(`${MAIN_URL}all`);
        cy.get('[data-testid="table-header"]').eq(0).click();
        cy.get('[data-testid="table-row"]').eq(0).should('contain', '12/05/2023');
      }); 
  })