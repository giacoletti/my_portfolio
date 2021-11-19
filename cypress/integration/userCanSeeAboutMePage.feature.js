describe("User can see About Me page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#about-tab").click();
  });

  it("displays About Me header", () => {
    cy.get("#about-header")
      .should("contain", "About Me").should("be.visible");
  });
});
