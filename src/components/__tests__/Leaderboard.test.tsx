import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom/extend-expect";
import Leaderboard from "../Leaderboard";

test("Records on leaderboard", () => {
  render(
    <Provider store={store}>
      <Leaderboard />
    </Provider>
  );

  expect(screen.getByRole("record")).toBeInTheDocument();
});
