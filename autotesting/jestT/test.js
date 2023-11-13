// BEGIN (write your solution here)
test('boom!', () => {
    expect(() => {
        read('/undefined');
    }).toThrow();
});
test('boom2!', () => {
    expect(() => {
        read('/usr/src/app');
    }).toThrow();
});
// END
