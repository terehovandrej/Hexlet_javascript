beforeAll(() => {
    const object = { a: [{ b: { c: 3 } }] };
});
test('reverse', () => {
    expect(set(object, 'a[0].b.c', 4)).toEqual({ a: [{ b: { c: 4 } }] });
});
// END

const cart = makeCart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35
cart.addItem({ name: 'house', price: 10 }, 1);
cart.getItems().length; // 3
cart.getCost(); // 45