describe("Adding a Restaurant", () => {
  it('Displays the restaurant in the list', () => {
    const restaurantName = "Meat Co.";

    cy.visit('http://localhost:1234');



    // the input should nnot appear
    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');
    
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveRestaurantButton"]')
      .click();

      //the input should again not appear
      cy.get('[data-test="newRestaurantName"]')
        .should('not.exist');
    
    cy.contains(restaurantName);
  });
});

