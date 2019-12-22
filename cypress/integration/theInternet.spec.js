context("asdasdad", () => {
  beforeEach(() => {
    cy.visit("http://the-internet.herokuapp.com");
  });

  it("A/B testing", () => {
    cy.contains("A/B Testing").click();

    cy.get(".example")
      .find("h3")
      .should($h3 => {
        const titles = ["A/B Test Control", "A/B Test Variation 1"];
        const title = $h3.map((i, el) => Cypress.$(el).text());

        if (title[0] === titles[0] || title[0] === titles[1]) {
          expect(true).to.equal(true);
        } else {
          expect(true).to.equal(false);
        }

        console.log(title[0]);
      });
  });

  it("add and remove", () => {
    cy.contains("Add/Remove").click();
    for (let i = 0; i < 10; i++) {
      cy.get('[onclick="addElement()"]')
        .should("contain", "Add Element")
        .click();
    }

    for (let i = 10; i < 0; i++) {
      cy.get(`#elements > :nth-child(${i})`)
        .should("contain", "Delete")
        .click();
    }
    for (let i = 0; i < 10; i++) {
      cy.get('[onclick="addElement()"]')
        .should("contain", "Add Element")
        .click();
    }
    cy.get('[onclick="deleteElement()"]').click({ multiple: true });
    cy.get("#elements > :nth-child(1)").should("not.exist");
  });
  /*
  it("basic auth", () => {
    cy.contains("Basic Auth").click();
    cy.type("admin{tab}admin{tab}{tab}", { delay: 100 });
  });
     it("broken images", () => {});
  it("challenging dom", () => {});
  it("checkboxes", () => {});
  it("entry ad", () => {}); */
});
