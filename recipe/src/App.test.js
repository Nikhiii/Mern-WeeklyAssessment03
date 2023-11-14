import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("displays the list of recipes", () => {
    const { getByText } = render(<App />);

    const recipe1 = getByText("Spaghetti Carbonara");
    const recipe2 = getByText("Chicken Tacos");
    const recipe3 = getByText("Vegetable Stir-Fry");

    expect(recipe1).toBeInTheDocument();
    expect(recipe2).toBeInTheDocument();
    expect(recipe3).toBeInTheDocument();
  });

  it("displays recipe details when a recipe is selected", () => {
    const { getByText } = render(<App />);

    const recipe1 = getByText("Spaghetti Carbonara");
    fireEvent.click(recipe1);

    const recipeDescription = getByText(
      "A classic Italian pasta dish with creamy egg sauce."
    );
    expect(recipeDescription).toBeInTheDocument();
  });
});
