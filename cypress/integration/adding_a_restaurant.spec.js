describe("Adding a Restaurant", () => {
  it('Displays the restaurant in the list', () => {
    const restaurantName = "Meat Co.";

    cy.visit('http://localhost:1234');
    
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveRestaurantButton"]')
      .click();
    
    cy.contains(restaurantName);
  });
});

