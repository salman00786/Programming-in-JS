const { default: TestRunner } = require('jest-runner');
const addFive = require("./addFive")

test('returns the number plus 2', () => {
    expect(addFive(1)).toBe(6);
})

