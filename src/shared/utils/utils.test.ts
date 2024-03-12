import { sortWithPropertyValue, toTitleCase } from ".";

test("toKebabCase works as expected", () => {
  expect(toTitleCase("testString")).toStrictEqual("Test String");
});

test("sortWithPropertyValue", () => {
  const testArr1 = [
    {
      test: 3,
    },
    {
      test: 2,
    },
    {
      test: 5,
    },
    {
      test: 1,
    },
    {
      test: 3,
    },
  ];

  const resolvedDescendingValue = [
    {
      test: 1,
    },
    {
      test: 2,
    },
    {
      test: 3,
    },
    {
      test: 3,
    },
    {
      test: 5,
    },
  ];
  expect(sortWithPropertyValue(testArr1, "test", "desc")).toStrictEqual(
    resolvedDescendingValue
  );

  const resolvedAscendingValue = [
    {
      test: 5,
    },
    {
      test: 3,
    },
    {
      test: 3,
    },
    {
      test: 2,
    },
    {
      test: 1,
    },
  ];
  expect(sortWithPropertyValue(testArr1, "test", "asc")).toStrictEqual(
    resolvedAscendingValue
  );
});
