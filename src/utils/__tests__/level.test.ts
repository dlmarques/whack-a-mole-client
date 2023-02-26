import { level } from "../level";

test("get right level", () => {
  expect(level(5)).toBe(2000);
});
