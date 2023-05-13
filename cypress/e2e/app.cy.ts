/// <reference types="cypress" />

import { MAIN_URL } from "../consts";

describe('Main app', () => {
    it('app loads correctly', () => {
      cy.visit(MAIN_URL);
      cy.contains('Daily Card');
    })
  })