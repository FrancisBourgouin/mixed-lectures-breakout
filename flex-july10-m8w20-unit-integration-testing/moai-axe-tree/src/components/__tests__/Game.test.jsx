import Game from "../Game";
import { render, fireEvent, waitForElement } from "@testing-library/react";

describe("Test the Game component", () => {
  it("should toggle between cheating and not cheating when click on it", () => {
    const { queryByText } = render(<Game />);

    const robot = queryByText("🤖");

    expect(robot).toHaveClass("cheating");

    fireEvent.click(robot);

    expect(robot).not.toHaveClass("cheating");
  });

  it("should let the computer win if it's cheating", () => {
    const { queryByText, queryByTestId } = render(<Game />);
    // Player will click on a button
    const axeButton = queryByTestId("axe");

    fireEvent.click(axeButton);
    // Computer will pick the opposite

    const computerWinningMessage = "THIS IS NOT WAR... THIS IS PEST CONTROL!";
    // Result should show a computer winning message

    waitForElement(() => queryByText(computerWinningMessage)).then(() => {
      const winMessage = queryByText(computerWinningMessage);
      expect(winMessage).toBeInTheDocument();
    });
  });
  it("should let somebody win if it's not cheating", () => {
    const { queryByText, queryByTestId, findByText } = render(<Game />);
    const robotSpan = queryByText("🤖");

    // Click on the robot

    fireEvent.click(robotSpan);

    // Player will click on a button
    const axeButton = queryByTestId("axe");

    fireEvent.click(axeButton);
    // Computer will pick the opposite

    // Result should show a computer winning message
    // findByText("Waiting for your choice!").then(() => {
    //   const waitingMessage = queryByText("Waiting for your choice!");
    //   expect(waitingMessage).not.toBeInTheDocument();
    // });
    // const waitingMessage = queryByText();
  });
});
