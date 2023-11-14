import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Bank from "./bank/Bank";

describe("Bank", () => {
  it("renders without crashing", () => {
    render(<Bank />);
  });

  it("checks the components", () => {
    const { getByLabelText, getByText } = render(<Bank />);
    const amountInput = getByLabelText("Amount:");
    const descriptionInput = getByLabelText("Description:");
    const addButton = getByText("Add Transaction");
    const depositDescription = getByText("Account Summary");
  });
  it("checks for the components", () => {
    const { getByLabelText, getByText } = render(<Bank />);
    const amountInput = getByText("Transaction Type:");
    const addButton = getByText("Transaction History");
    const depositDescription = getByText("Banking Transaction Tracker");
  });
});
