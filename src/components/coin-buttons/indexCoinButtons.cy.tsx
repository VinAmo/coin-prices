import React from "react";
import CoinButtons from "./index";

describe("<CoinButtons />", () => {
  it("renders", () => {
    cy.mount(<CoinButtons onClick={(coin) => {}} />);
    cy.get("button").contains(new RegExp("^BTC$", "g")).should("be.visible");
    cy.get("button").contains(new RegExp("^ETH$", "g")).should("be.visible");
    cy.get("button").contains(new RegExp("^XRP$", "g")).should("be.visible");
  });
});
