/// <reference types="cypress" />

import { MAIN_URL } from "../consts";

describe('Monthly report', () => {
    beforeEach(()=>{
      cy.visit(`${MAIN_URL}all`);
    })
    it('show correct total & table data', () => {
        cy.get('[data-testid="total"]').contains('Total hours 13').should('exist');
    
        const NUM_OF_CARDS = 10;
        cy.get('[data-testid="table-row"]').should('have.length', NUM_OF_CARDS)
        cy.get('[data-testid="table-row"]').eq(0).should('contain', '10/05');
      }); 

      it('click sort table data', () => {
        cy.get('[data-testid="table-header"]').eq(0).click();
        cy.get('[data-testid="table-row"]').eq(0).should('contain', '19/05');
      }); 
  })