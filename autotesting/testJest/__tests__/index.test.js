 const reverse = (str) => str.split('').reverse().join('');

test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
});