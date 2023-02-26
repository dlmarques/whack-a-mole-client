import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom/extend-expect";
import Leaderboard from "../Leaderboard";
import Holes from "../Holes";
jest.useFakeTimers();
import.meta.jest.useFakeTimers();

test("Mole should be appear after 2 minutes", () => {
  render(
    <Provider store={store}>
      <Holes />
    </Provider>
  );
  setTimeout(() => {
    expect(screen.getByRole("mole")).toBeInTheDocument();
  }, 2000);
});
