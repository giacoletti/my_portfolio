describe("User can see CV page", () => {
  before(() => {
    cy.visit("/");
    cy.get("#cv-tab").click();
  });

  it("displays CV header", () => {
    cy.get("#cv-header").should("contain", "Giovanni Iacoletti");
  });

  it("displays current activity header", () => {
    cy.get("#current-activity-header").should(
      "contain",
      "Full Stack Developer graduated from Craft Academy"
    );
  });

  describe("displays Experience section", () => {
    it("displays Experience header", () => {
      cy.get("#work-experience-header").should("contain", "Experience");
    });

    it("displays the latest work experience", () => {
      cy.get("#job-1").within(() => {
        cy.get(".header").should("contain", "Craft Academy");
        cy.get(".header").should("contain", "Full Stack Web Developer");
        cy.get(".jobDate").should("contain", "October 2021 - February 2022");
        cy.get(".description").should(
          "contain",
          "Build front-end and back-end applications using agile methodologies. Apply Test Driven Development as core flow and adapt as the projects evolve."
        );
      });
    });

    it("displays the second to last work experience", () => {
      cy.get("#job-2").within(() => {
        cy.get(".header").should("contain", "BMD Constructions");
        cy.get(".header").should("contain", "Construction Labourer");
        cy.get(".jobDate").should("contain", "May 2020 - March 2021");
        cy.get(".description").should(
          "contain",
          "Spotting excavators for precise excavation operations, laying pipes, steel fixing, operating power tools etc."
        );
      });
    });

    it("displays the third to last work experience", () => {
      cy.get("#job-3").within(() => {
        cy.get(".header").should(
          "contain",
          "Southern Riverina Labour Contracting Pty Ltd"
        );
        cy.get(".header").should(
          "contain",
          "Agricultural and Factory Labourer"
        );
        cy.get(".jobDate").should("contain", "November 2019 - March 2020");
        cy.get(".description").should(
          "contain",
          "Weeding seed and grain crops by hand or using a hoe. Handling tomato sauce cans and bottles for labelling and packing. Sorting tomatoes on the tomato harvester and cleaning the machine on the go."
        );
      });
    });

    it("displays the fourth to last work experience", () => {
      cy.get("#job-4").within(() => {
        cy.get(".header").should("contain", "Dekker Landscapes Pty Ltd");
        cy.get(".header").should("contain", "Landscaper");
        cy.get(".jobDate").should("contain", "May 2019 - November 2019");
        cy.get(".description").should(
          "contain",
          "Weeding, digging trenches, laying pipes, mixing concrete, using power tools, steel fixing. Preparing the final touches for client delivery."
        );
      });
    });

    it("displays the fifth to last work experience", () => {
      cy.get("#job-5").within(() => {
        cy.get(".header").should("contain", "Import IT Consulting");
        cy.get(".header").should("contain", "SAP Abap Analyst Developer");
        cy.get(".jobDate").should("contain", "May 2017 - August 2018");
      });
    });
  });

  describe("displays Education section", () => {
    it("displays Education header", () => {
      cy.get("#education-header").should("contain", "Education");
    });

    it("displays the latest education", () => {
      cy.get("#education-1").within(() => {
        cy.get(".header").should("contain", "Craft Academy");
        cy.get(".header").should(
          "contain",
          "Full Stack Web Developer - Certificate of Excellence"
        );
        cy.get(".educationDate").should("contain", "2022");
        cy.get(".description").should(
          "contain",
          "Learn Agile software development methodologies along with modern frameworks including: HTML5, Javascript, Ruby on Rails, React, and React Native"
        );
      });
    });

    it("displays the second to last education", () => {
      cy.get("#education-2").within(() => {
        cy.get(".header").should("contain", "Parthenope University of Naples");
        cy.get(".header").should("contain", "Department of Computer Science");
        cy.get(".educationDate").should("contain", "2016");
        cy.get(".description").should(
          "contain",
          "Completed courses: Programming, Computer Architecture, Databases, Physics, Business Economy, English"
        );
      });
    });
  });
});
