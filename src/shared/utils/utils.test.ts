import { toTitleCase } from ".";

test("toKebabCase works as expected", () => {
  expect(toTitleCase("testString")).toStrictEqual("Test String");
});
