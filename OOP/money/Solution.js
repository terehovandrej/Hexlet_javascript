import Money from './Money.js'

const money2 = new Money(200, 'eur');
const money1 = new Money(100);


console.log(money1.add(money2))