import React from "react";
import ThemeSwitch from "./index";

describe("<ThemeSwitch />", () => {
  it("renders", () => {
    cy.mount(<ThemeSwitch />);
    cy.get("button").contains(new RegExp("^LIGHT$", "g")).should("be.visible");
    cy.get("button").contains(new RegExp("^DARK$", "g")).should("be.visible");
    cy.get("button").contains(new RegExp("^ROSE$", "g")).should("be.visible");
    cy.get("button").contains(new RegExp("^SKY$", "g")).should("be.visible");
    cy.get("button").contains(new RegExp("^TEAL$", "g")).should("be.visible");
  });
});
