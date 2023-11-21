import Computer from "../Computer";
import { render, fireEvent } from "@testing-library/react";

describe("Computer", () => {
  it("should show the computer in cheating mode", () => {
    const { queryByText, getByText } = render(<Computer isCheating />);

    const robotSpan = queryByText("🤖"); // Is fine if the element is there or not
    const robotSpan2 = getByText("🤖"); // Will throw an error if the element is not there

    expect(robotSpan).toHaveClass("cheating");
  });
  it("should show the computer in non-cheating mode", () => {
    const { queryByText, getByText } = render(<Computer />);

    const robotSpan = queryByText("🤖"); // Is fine if the element is there or not
    const robotSpan2 = getByText("🤖"); // Will throw an error if the element is not there

    expect(robotSpan).not.toHaveClass("cheating");
  });
  it("should call the function toggleCheating", () => {
    const mockToggleCheating = jest.fn();
    const { queryByText } = render(<Computer toggleCheating={mockToggleCheating} />);

    const robotSpan = queryByText("🤖");

    // Click on the robot

    fireEvent.click(robotSpan);

    expect(mockToggleCheating).toHaveBeenCalled(); // It is a great honor.
  });
});
