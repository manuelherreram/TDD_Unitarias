const filterByValue = require("./filtrarArray");

test("filterByValue should return an array containing the filtered values", () => {
  const arr = ["apple", "banana", "cherry", "pear"];
  const val = "a";
  const result = filterByValue(arr, val);
  expect(result).toEqual(expect.arrayContaining(["apple", "banana"]));
});
