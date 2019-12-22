context("Add mamba to basket and purchace it", function() {
  beforeEach(function() {
    cy.visit("https://www.kaalimato.com/");
  });

  it("asdasd", function() {
    cy.get("#topbar_hakufield")
      .click()
      .type("Vac-U-Lock", { delay: 100 })
      .should("have.value", "Vac-U-Lock");
    cy.get("#topbar_hakufield")
      .click()
      .type("{downarrow}{enter}", { delay: 200 });

    cy.get(".col2").scrollTo(0, 400);
    //AAAA fix this
    cy.get("#prodblobw_31417 > .inner1 >");

    //cy.visit("https://www.kaalimato.com/catalog/Vac-U-Lock%20-%20Classic%20Dong%208%22_p_31417.html")

    expect(true).to.equal(true);
  });

  /* it("click ", () => {
    cy.get("#tab_163_anchor").click();
    cy.get(
      '[href="https://www.kaalimato.com/catalog/Tekopenikset_c_686.html"]'
    ).click();
    expect(true).to.equal(true);
  }); */
  it("cy.visit() - visit a remote url", function() {
    expect(true).to.equal(true);
    cy.get("#topbar_hakufield")
      .click()
      .type("Vac-U-Lock", { delay: 100 })
      .should("have.value", "Vac-U-Lock");
    cy.get("#topbar_hakufield")
      .click()
      .type("{downarrow}{enter}", { delay: 200 });

    cy.get(".col2").scrollTo(0, 400);
    //AAAA fix this
    cy.get("#prodblobw_31417 > .inner1 >");

    //cy.visit("https://www.kaalimato.com/catalog/Vac-U-Lock%20-%20Classic%20Dong%208%22_p_31417.html")

    expect(true).to.equal(true);
  });
});
