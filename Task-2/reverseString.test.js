const reverseString = require('./reverseString');

test('reversing a string', () => {
    expect(reverseString('this')).toBe('siht');
})

test('less than 2 charcters long', () => {
    expect(() => {reverseString('')}).toThrow();
})