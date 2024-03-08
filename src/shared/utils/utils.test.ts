import { camelCaseToTitleCase } from ".";

test("toKebabCase works as expected", () => {
  expect(camelCaseToTitleCase("testString")).toStrictEqual("Test String");
});
