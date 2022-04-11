const makeCart = getImpelementation();
// BEGIN (write your solution here)
test('getCost', () => {
    const cart = makeCart()
    cart.addItem({ name: 'car', price: 3 }, 5)
    console.log(cart.getCost())
    expect(cart.getCost()).toEqual(15)
});
test('getItems', () => {
    const cart = makeCart()
    cart.addItem({ name: 'car', price: 3 }, 5)
    console.log(cart.getCost())
    expect(cart.getItems()).toEqual([{ good: { name: 'car', price: 3 }, count: 5 }])
});
test('getCount', () => {
    const cart = makeCart()
    cart.addItem({ name: 'car', price: 3 }, 5)
    console.log(cart.getCost())
    expect(cart.getCount()).toEqual(5)
});

test('addItem', () => {
    const cart = makeCart()
    cart.addItem({ name: 'car', price: 3 }, 5)
    cart.addItem({ name: 'apple', price: 2 }, 3)
    console.log(cart.getCost())
    expect(cart.getItems().length).toEqual(2)
});
// END
