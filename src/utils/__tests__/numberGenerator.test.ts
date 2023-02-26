import { randomGenerator } from "../numberGenerator";

test("get right level", () => {
  expect(randomGenerator()).toEqual(expect.any(Number));
});
