import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("adds a product when Add button is clicked", () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const nameInput = getByPlaceholderText("Product Name");
    const descriptionInput = getByPlaceholderText("Product Description");
    const quantityInput = getByPlaceholderText("Quantity");
    const priceInput = getByPlaceholderText("Price");
    const addButton = getByText("Add");

    fireEvent.change(nameInput, { target: { value: "New Product" } });
    fireEvent.change(descriptionInput, {
      target: { value: "New Description" },
    });
    fireEvent.change(quantityInput, { target: { value: "10" } });
    fireEvent.change(priceInput, { target: { value: "19.99" } });

    fireEvent.click(addButton);

    const productName = getByText("New Product");
    const productDescription = getByText("New Description");
    const productQuantity = getByText("10");
    const productPrice = getByText("19.99");

    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productQuantity).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });
});
