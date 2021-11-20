describe("User can see CV page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });

  it("displays CV header", () => {
    cy.get("#cv-header").should("contain", "Giovanni Iacoletti");
  });

  describe("displays Work Experience section", () => {
    it("displays Work Experience header", () => {
      cy.get("#work-experience-header").should("contain", "Work Experience");
    });
  
    it("displays the latest work experience", () => {
      cy.get("#job-1").within(() => {
        cy.get(".header").should("contain", "BMD Constructions");
        cy.get(".header").should("contain", "Construction Labourer");
        cy.get(".jobDate").should("contain", "May 2020 - March 2021");
        cy.get(".description").should("contain", "Spotting excavators for precise excavation operations, laying pipes, steel fixing, operating power tools etc.");
      });
    });
  
    it("displays the second to last work experience", () => {
      cy.get("#job-2").within(() => {
        cy.get(".header").should("contain", "Southern Riverina Labour Contracting Pty Ltd");
        cy.get(".header").should("contain", "Agricultural and Factory Labourer");
        cy.get(".jobDate").should("contain", "November 2019 - March 2020");
        cy.get(".description").should("contain", "Weeding seed and grain crops by hand or using a hoe. Handling tomato sauce cans and bottles for labelling and packing. Sorting tomatoes on the tomato harvester and cleaning the machine on the go.");
      });
    });
  
    it("displays the third to last work experience", () => {
      cy.get("#job-3").within(() => {
        cy.get(".header").should("contain", "Dekker Landscapes Pty Ltd");
        cy.get(".header").should("contain", "Landscaper");
        cy.get(".jobDate").should("contain", "May 2019 - November 2019");
        cy.get(".description").should("contain", "Weeding, digging trenches, laying pipes, mixing concrete, using power tools, steel fixing. Preparing the final touches for client delivery.");
      });
    });
  });

});
