import React from 'react';

describe("Portfolio interface", () => {
  it("successfully renders", () => {
    cy.visit("/");
    cy.get("#header").should("contain", "My Portfolio");
    cy.get("#footer").should("contain", `Made with React ${React.version}`);
    cy.get("#main-header").should("contain", "Welcome to my portfolio");
    cy.get("#home-content").should("be.visible");
    cy.get("#react-icon").should("be.visible");
    cy.get("#html5-icon").should("be.visible");
    cy.get("#css3-icon").should("be.visible");
    cy.get("#node-icon").should("be.visible");
  });
});
