import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the first question and options", () => {
    const { getByText } = render(<App />);

    const firstQuestion = getByText("What is the capital of France?");
    const optionParis = getByText("Paris");

    expect(firstQuestion).toBeInTheDocument();
    expect(optionParis).toBeInTheDocument();
  });

  it("selects an answer and progresses to the next question", () => {
    const { getByText } = render(<App />);

    const optionBerlin = getByText("Berlin");
    fireEvent.click(optionBerlin);

    const secondQuestion = getByText(
      "Which planet is known as the Red Planet?"
    );
    expect(secondQuestion).toBeInTheDocument();
  });
});
