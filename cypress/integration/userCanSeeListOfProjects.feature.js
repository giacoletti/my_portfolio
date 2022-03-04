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

  describe("can see Recipe Hub client project", () => {
    it("is expected to display relative project card", () => {
      cy.get("#project-8").within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").should("contain", "Recipe Hub (Client)");
        cy.get(".description").should(
          "contain.text",
          "Social web application platform built to share recipes"
        );
      });
    });

    it("is expected to display GitHub icon link", () => {
      cy.get("[data-cy=github-icon-8]").should("be.visible");
    });

    it("is expected to display GitHub tooltip", () => {
      cy.get("[data-cy=github-icon-8]")
        .trigger("mouseover")
        .get("[data-cy=github-tooltip-8]")
        .should("contain.text", "GitHub repo");
    });

    it("is expected to display deployed icon link", () => {
      cy.get("[data-cy=deployed-icon-8]").should("be.visible");
    });

    it("is expected to display deployed icon tooltip", () => {
      cy.get("[data-cy=deployed-icon-8]")
        .trigger("mouseover")
        .get("[data-cy=deployed-tooltip-8]")
        .should("contain.text", "Deployed application");
    });
  });
});
