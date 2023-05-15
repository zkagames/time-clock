/// <reference types="cypress" />

import { MAIN_URL } from "../consts";

describe('Missing Days', () => {
    it('show correct missing days', () => {
        const INITIAL_NOTIFY_VALUE = 2;
        cy.visit(`${MAIN_URL}all`);
        cy.get('[data-testid="missing-days-header"]').contains('Missing days').should('exist');
        cy.get('[data-testid="missing-days-select"]').find(':selected').contains(INITIAL_NOTIFY_VALUE)
      }); 
  })