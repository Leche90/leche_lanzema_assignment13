import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import "@testing-library/jest-dom"; // For extended matchers
import React from "react";

test("Card changes background color and cursor when disabled", () => {
  render(<Card title="Disabled Card" content="Card Content" disabled />);
  
  // Query the card element by its title
  const cardElement = screen.getByText(/Disabled Card/i);

  // Check if the parent element of the card has the correct styles for the disabled state
  expect(cardElement.closest("div")).toHaveStyle({
    color: "rgb(102, 102, 102)",
    cursor: "not-allowed",
  });
});
