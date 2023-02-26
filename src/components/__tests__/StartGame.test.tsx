import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store";
import StartGame from "../StartGame";

describe("Start game", () => {
  test("start game form should be filled", async () => {
    render(
      <Provider store={store}>
        <StartGame />
      </Provider>
    );

    const input = screen.getByRole("username-input");
    const button = screen.getByRole("start-game");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    userEvent.type(input, "username1");
    await waitFor(() => {
      expect(screen.getByRole("username-input")).toHaveValue("username1");
    });
  });
});
