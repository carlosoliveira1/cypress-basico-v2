// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />


describe("Central de Atendimento ao Cliente TAT", function () {
  this.beforeEach(function () {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", function () {
    const longText =
      "Teste, teste. tsste tetsygsygh ugdusg diugs ud ugsud sugdsiud siudgsi isudgssiugd";

    cy.get("#firstName").type("Carlos");
    cy.get("#lastName").type("Oliveira");
    cy.get("#email").type("Teste2@teste.com");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.contains("button", "Enviar").click();

    cy.get(".success").should("be.visible");
  });

  it("Exibe mensagem de erro ao submeter o formulário com um email contento formato inválido", function () {
    cy.get("#firstName").type("Carlos");
    cy.get("#lastName").type("Oliveira");
    cy.get("#email").type("Teste2teste.com");
    cy.get("#open-text-area").type("Teste de formulário");
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("campo telefone continua vazio quando o input é um valor não numérico", function () {
    cy.get("#phone").type("abc").should("have.value", "");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.get("#firstName").type("Carlos");
    cy.get("#lastName").type("Oliveira");
    cy.get("#email").type("Teste2@teste.com");
    cy.get("#phone-checkbox").click();
    cy.get("#open-text-area").type("Teste de formulário");
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get("#firstName")
      .type("Carlos")
      .should("have.value", "Carlos")
      .clear()
      .should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.get(".button").click();
    cy.get(".error").should("be.visible");
  });

  it("envia o formuário com sucesso usando um comando customizado", function () {
    cy.fillMandatoryFieldsAndSubmit();

    cy.get(".success").should("be.visible");
  });

  it("seleciona um produto (YouTube) por seu texto", function () {
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });

  it("seleciona um produto (Mentoria) por seu valor (value)", function () {
    cy.get("#product")
    .select("mentoria")
    .should("have.value", "mentoria");
  });

  it("seleciona um produto (Mentoria) por seu valor (value)", function () {
    cy.get("#product")
    .select(1)
    .should("have.value", "blog");
  });


  it("marca o tipo de atendimento Feedback", function () {
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('have.value', 'feedback')  
  });

  // it.only('marca cada tipo de atendimento', function() {
  //   cy.get('input[type="radio"]')
  //   .should('have.length', 3)
  //   .each(function($radio){
  //     cy.wrap($radio).check()
  //     cy.wrap($radio).should('be.checked')
  //   })

  // })
  
});
