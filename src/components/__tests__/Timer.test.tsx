import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Timer from "../Timer";
import "@testing-library/jest-dom/extend-expect";

test("timer should be start at 2:00 minutes", () => {
  render(
    <Provider store={store}>
      <Timer />
    </Provider>
  );

  expect(screen.getByRole("timer")).toHaveTextContent(/2:00/);
});
