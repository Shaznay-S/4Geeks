// Import the function sum from the app.js file
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.75); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should convert to yen", function() {
    const yen = Number(fromDollarToYen(1).toFixed(2));
    expect(yen).toBe(146.26);
})

test("One yen should convert to pound", function(){
    const pound = Number(fromYenToPound(1).toFixed(2));
    expect(pound).toBe(0.01)
})
