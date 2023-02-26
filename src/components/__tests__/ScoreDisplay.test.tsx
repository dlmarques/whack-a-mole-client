import { render, screen, waitFor } from "@testing-library/react";
import store from "../../store/index";
import { Provider } from "react-redux";
import ScoreDisplay from "../ScoreDisplay";

describe("ScoreDisplay Component", () => {
  test("should have the right score", () => {
    render(
      <Provider store={store}>
        <ScoreDisplay />
      </Provider>
    );
    const title = screen.getByRole("score");
    waitFor(() => expect(title).toHaveTextContent("Score:"));
  });
});
