Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get("#firstName").type("Carlos");
    cy.get("#lastName").type("Oliveira");
    cy.get("#email").type("Teste2@teste.com");
    cy.get("#open-text-area").type('text');
    cy.contains('button', 'Enviar').click();
})