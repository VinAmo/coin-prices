import React from "react";
import PricePanel from "./index";

describe("<PricePanel />", () => {
  it("renders", () => {
    const data = {
      sell: "AUD",
      buy: "BTC",
      ask: 42711.81772783,
      bid: 41929.27495688,
      rate: 0.000023412724,
      spotRate: 42320.54634236,
      market: "AUD",
      timestamp: "2023-08-30T07:01:43.7533048+00:00",
      rateType: "Ask",
      rateSteps: "",
    };

    cy.mount(<PricePanel data={data} />);
    cy.get("div")
      .contains("Current (30 August 2023 at 17:01:43) price of")
      .should("be.visible");
    cy.get("div").contains("BTC").should("be.visible");
    cy.get("div").contains("42711.82AUD").should("be.visible");
  });
});
