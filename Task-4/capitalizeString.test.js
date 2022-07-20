const capitalizeString = require('./capitalizeSrting');

test('capitalize the first character in the string', () => {
    expect(capitalizeString("this")).toBe('This');
})

test('capitalize the first character in the string', () => {
    expect(capitalizeString("tHIS")).toBe('This');
})

test('capitalize the first character in the string', () => {
    expect(capitalizeString("THIS")).toBe('This');
})