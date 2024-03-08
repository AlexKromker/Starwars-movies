export function camelCaseToTitleCase(str: string) {
  return (
    str
      // insert space before all caps
      .replace(/([A-Z])/g, " $1")
      // uppercase the first character
      .replace(/^./, function (str) {
        return str.toUpperCase();
      })
  );
}

export function sortWithPropertyValue(
  arr: Array<any>,
  propertyName: string,
  orderBy: "asc" | "desc"
) {
  const newArray = Array.from(arr);

  return newArray.sort((a, b) => {
    if (orderBy === "desc") {
      return a[propertyName]?.localeCompare(b[propertyName]);
    } else {
      return b[propertyName]?.localeCompare(a[propertyName]);
    }
  });
}
