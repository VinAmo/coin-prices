describe("can check price", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    cy.get("div").contains("Select a coin to check the price").should("exist");

    cy.get("button").contains("BTC").click();
    cy.get("div")
      .contains(new RegExp("Current \\([^)]+\\) price of", "g"))
      .should("exist");
    cy.get("div")
      .contains("Select a coin to check the price")
      .should("not.exist");
  });
});

describe("can handle check price error", () => {
  it("passes", () => {
    cy.intercept(
      { method: "GET", url: "/api/prices/aud/*" },
      {
        statusCode: 500,
        body: { error: "Server is down" },
      }
    ).as("getPrices");

    cy.visit("http://localhost:3000/");

    cy.get("button").contains("ETH").click();
    cy.wait("@getPrices");
    cy.get("div")
      .contains("Received an 'not ok' HTTP response.")
      .should("exist");
  });
});
