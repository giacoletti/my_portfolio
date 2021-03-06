describe("User can navigate the app", () => {
  before(() => {
    cy.visit("/");
  });

  describe("to About tab and it", () => {
    before(() => {
      cy.get("#about-tab").click();
    });

    it("displays About Me header", () => {
      cy.get("#about-header").should("contain", "About Me");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "about");
    });

    it("does not display My Projects header", () => {
      cy.get("#project-header").should("not.exist");
    });

    it("does not display Welcome header", () => {
      cy.get("#main-view").should("not.exist");
    });

    it("does not display CV header", () => {
      cy.get("#cv-header").should("not.exist");
    });
  });

  describe("to My Projects tab and it", () => {
    before(() => {
      cy.get("#projects-tab").click();
    });

    it("displays My Projects header", () => {
      cy.get("#projects-header").should("contain", "My Projects");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "projects");
    });

    it("does not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display Welcome header", () => {
      cy.get("#main-view").should("not.exist");
    });

    it("does not display CV header", () => {
      cy.get("#cv-header").should("not.exist");
    });
  });

  describe("to CV tab and it", () => {
    before(() => {
      cy.get("#cv-tab").click();
    });

    it("displays CV header", () => {
      cy.get("#cv-header").should("contain", "Giovanni Iacoletti");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "CV");
    });

    it("does not display Welcome header", () => {
      cy.get("#main-view").should("not.exist");
    });

    it("does not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });
  });

  describe("back to My Portfolio/Main View and it", () => {
    before(() => {
      cy.get("#header").click();
    });

    it("displays Welcome", () => {
      cy.get("#main-header").should("contain", "Welcome to my portfolio");
    });

    it("displays homepage content", () => {
      cy.get("#home-content").should("be.visible");
    });

    it("displays correct url", () => {
      cy.url()
        .should("not.contain", "projects")
        .should("not.contain", "about");
    });

    it("does not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });

    it("does not display CV header", () => {
      cy.get("#cv-header").should("not.exist");
    });
  });
});
