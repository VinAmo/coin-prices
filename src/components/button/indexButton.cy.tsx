import React from "react";
import Button from "./index";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(<Button name="Click me" category="solid" alignment="floating" />);
    cy.get("button").should("have.text", "Click me");
  });
});
