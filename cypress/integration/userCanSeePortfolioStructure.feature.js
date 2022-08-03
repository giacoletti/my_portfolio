import React from 'react';

describe("Portfolio interface", () => {
  before(() => {
    cy.visit("/");
  });

  it("successfully renders", () => {
    cy.get("#header").should("contain", "My Portfolio");
    cy.get("#footer").should("contain", `Made with React ${React.version}`);
    cy.get("#main-header").should("contain", "Welcome to my portfolio");
    cy.get("#home-content").should("be.visible");
    cy.get("#react-icon").should("be.visible");
    cy.get("#html5-icon").should("be.visible");
    cy.get("#css3-icon").should("be.visible");
    cy.get("#node-icon").should("be.visible");
  });

  it("is expected to display info message", () => {
    cy.get("[data-cy=info-message]").should("contain.text", "This website is obsolete. New portfolio.");
  });

  describe("visitor can click on New portfolio link", () => {
    before(() => {
      cy.get("[data-cy=info-message] a").click();
    });

    it("is expected to navigate to new portfolio", () => {
      cy.url().should("eq", "https://giovanni-iacoletti.netlify.app/");
    });
  });
});
