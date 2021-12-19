describe("User can see About Me page", () => {
  before(() => {
    cy.visit("/");
    cy.get("#about-tab").click();
  });

  it("displays About Me header", () => {
    cy.get("#about-header")
      .should("contain", "About Me").should("be.visible");
  });

  it("displays About Me content", () => {
    cy.get(".aboutMeContent").should("be.visible");
  });
});
