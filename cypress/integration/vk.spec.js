context("visti verkkokauppa", function() {
  beforeEach(function() {
    cy.visit("https://www.verkkokauppa.com/");
  });

  it("asdasd", function() {
    //Type test product name into the search field
    cy.get(".search-field").type("Playstation 4{enter}");
    //check if pressing enter opens "haku" container
    cy.contains("Haku").should("be.visible");
    //wait for the items to load, causes problems if you dont
    cy.wait(500);
    //get first item of the search items and clicks it
    cy.get(
      ":nth-child(1) > :nth-child(1) > .list-product > .list-product__info > .list-product-info > .list-product-info__link"
    ).click();
    //scrolls down to "Lisää ostoskoriin"-button
    cy.get(".shipment-details-add-options > .add-to-cart > .vk-button")
      .scrollIntoView({ offset: { top: -200 }, duration: 400 })
      .should("contain", "Lisää ostoskoriin");
    //closes cookie popup message thing. it should be open at this point and check that it closes
    cy.get(".vk-cookie-notification-buttons > .vk-button")
      .click()
      .should("not.exist");
    //checks that "Lisää ostoskoriin"-Button is visible and clicks it
    cy.get(".shipment-details-add-options > .add-to-cart > .vk-button")
      .should("be.visible")
      .click();
    //waits 500ms, ostoskori opens and needs to load
    cy.wait(500);
    //same thing all over again
    cy.get(".search-field").type("Playstation controller{enter}");
    cy.wait(500);
    cy.get(
      ":nth-child(1) > :nth-child(5) > .list-product > .list-product__info > .list-product-info > .list-product-info__link"
    )
      .scrollIntoView({ offset: { top: -200 }, duration: 400 })
      .should("be.visible")
      .click();

    cy.get(".shipment-details-add-options > .add-to-cart > .vk-button")
      .scrollIntoView({ offset: { top: -200 }, duration: 400 })
      .should("be.visible");

    cy.get(".shipment-details-add-options > .add-to-cart > .vk-button")
      .should("contain", "Lisää ostoskoriin")
      .click();
    cy.wait(500);
    //ostoskori should open when you click "Lisää ostoskoriin"-button
    //check if ostoskori is open
    cy.get(".dropdown-modal-submit ").should("be.visible");
    //checks if ostoskori has "Siirry kassalle button" and clicks it
    cy.get(".dropdown-modal-submit > .vk-button")
      .should("contain", "Siirry kassalle")
      .click();
    //Goes to check out and checks that "Seuraava"-button exists and clicks it
    cy.get(".vk-pointy-button")
      .should("contain", "Seuraava")
      .click();
  });

  /*   it("asdasdsdsdd", function() {
    expect(true).to.equal(true);
  }); */
});
