const {Factorial} = require("../../app/service/index");
const logger = require("../../app/config/logger");

test('factorial of one is one', () => {
    const expected = 1;
    let factorial = new Factorial();
    let result = factorial.calculate_recursive(1);
    expect(result).toBe(expected);
});

test('factorial of two is two', () => {
    const expected = 2;
    let factorial = new Factorial();
    let result = factorial.calculate_recursive(2);
    expect(result).toBe(expected);
});

test('factorial generator of one is one', () => {
    const expected = 1;
    let factorial = new Factorial();
    let result;
    for(let i of factorial.calculate_generator(1)){
        result = i;
    }
    expect(result).toBe(expected);
});

test('factorial generator of four is twenty-four', () => {
    const expected = 24;
    let factorial = new Factorial();
    let result;
    for(let i of factorial.calculate_generator(4)){
        result = i;
    }
    expect(result).toBe(expected);
});