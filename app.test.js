const { sum, fromEuroToDollar, fromDollarToYen } = require('./app.js');

//testing sum function
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

//testing for euroToDollar
test("One euro should be 1.206 dollars", () => {
  expect(fromEuroToDollar(3.5)).toBe(4.2)
});

//testing for dollarToYen
test("One dollar should be 106.583 Yen", () => {
  expect(fromDollarToYen(1)).toBe(106.583)
});

 //testing for YenToPound
test("One yen should be 0.006 pounds", () => {
  expect(fromYenToPound(1)).toBe(0.006)
});
