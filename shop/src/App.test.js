import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it('adds a product to the cart when "Add to Cart" is clicked', () => {
    const { getByText, queryByText } = render(<App />);

    const product1 = getByText("Product 1");
    fireEvent.click(product1);

    const addToCartButton = getByText("Add to Cart");
    fireEvent.click(addToCartButton);

    const cartItem = queryByText("Product 1 - $19.99");
    expect(cartItem).toBeInTheDocument();
  });

  it("displays total amount and cart items correctly in the cart", () => {
    const { getByText } = render(<App />);

    const product1 = getByText("Product 1");
    const product2 = getByText("Product 2");

    fireEvent.click(product1);
    const addToCartButton1 = getByText("Add to Cart");
    fireEvent.click(addToCartButton1);

    fireEvent.click(product2);
    const addToCartButton2 = getByText("Add to Cart");
    fireEvent.click(addToCartButton2);

    const totalAmount = getByText("Total Amount: $49.98");
    expect(totalAmount).toBeInTheDocument();

    const cartItem1 = getByText("Product 1 - $19.99");
    const cartItem2 = getByText("Product 2 - $29.99");
    expect(cartItem1).toBeInTheDocument();
    expect(cartItem2).toBeInTheDocument();
  });

  it("displays an empty cart message when the cart is empty", () => {
    const { getByText } = render(<App />);

    const emptyCartMessage = getByText("Your cart is empty.");
    expect(emptyCartMessage).toBeInTheDocument();
  });
});
