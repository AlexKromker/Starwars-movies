export function toTitleCase(str: string) {
  return (
    str
      .replace(/_/g, " ")
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
    const item1 = a[propertyName].toString();
    const item2 = b[propertyName].toString();

    if (orderBy === "desc") {
      return item1?.localeCompare(item2);
    } else {
      return item2?.localeCompare(item1);
    }
  });
}
