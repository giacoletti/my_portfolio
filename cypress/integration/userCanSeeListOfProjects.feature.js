describe("User can see list of projects", () => {
  before(() => {
    cy.visit("/");
    cy.get("#projects-tab").click();
  });

  it("displays the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "My First Website");
      cy.get(".description").should("contain", "This was my first project.");
    });
  });

  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "FizzBuzz");
      cy.get(".description").should(
        "contain",
        "Small FizzBuzz game simulator, written in Ruby."
      );
    });
  });

  it("displays the third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Address Book");
      cy.get(".description").should(
        "contain",
        "Address book application with more features on the way."
      );
    });
  });
  
});
