describe('User can see Contact page', () => {
  before(() => {
    cy.visit('/');
    cy.get('#contact-tab').click();
  });

  it('is expected to display "Your Name" label', () => {
    cy.get('[data-cy=name-label]').should('contain.text', 'Your Name:').and('be.visible');
  });

  it('is expected to display name input', () => {
    cy.get('[data-cy=name-input]').should('be.visible');
  });

  it('is expected to display "Your Email" label', () => {
    cy.get('[data-cy=email-label]').should('contain.text', 'Your Email:').and('be.visible');
  });

  it('is expected to display email input', () => {
    cy.get('[data-cy=email-input]').should('be.visible');
  });

  it('is expected to display "Message" label', () => {
    cy.get('[data-cy=message-label]').should('contain.text', 'Message:').and('be.visible');
  });

  it('is expected to display message text area', () => {
    cy.get('[data-cy=message-textarea]').should('be.visible');
  });

  it('is expected to display "Send" button', () => {
    cy.get('[data-cy=submit-button]').should('contain.text', 'Send').and('be.visible');
  });
});
