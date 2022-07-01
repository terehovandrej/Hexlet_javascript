// Money(value, currency = 'usd') – создает объект-деньги.
// Money.prototype.getValue() – возвращает стоимость в виде числа
// Money.prototype.getCurrency() – возвращает валюту денег
// Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано в указанную валюту
// Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму исходных и переданных денег, в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
// Money.prototype.format() – возвращает локализованное представление денег удобное для вывода

function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
    // Методы по прежнему определены снаружи как обычные функции
}

Money.prototype.getValue = function getValue() {
    return this.value;
}

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
}
Money.prototype.exchangeTo = function exchangeTo(currency) {
    const newmoney = new Money(this.value, this.currency)
    if (currency === 'eur' && this.currency === 'usd'){
        newmoney.value = this.value * 0.7
        newmoney.currency = 'eur'
    } else if (currency === 'usd' && this.currency === 'eur'){
        newmoney.value = this.value * 1.2
        newmoney.currency = 'usd'
    }
    return newmoney;
}
//возвращает новый объект-деньги, который представляет из себя сумму исходных
//и переданных денег, в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
Money.prototype.add = function add(money) {
    const newmoney = new Money(this.value, this.currency)
    if (money.currency === 'eur' && this.currency === 'usd'){
        newmoney.value = this.value + money.value * 1.2
        newmoney.currency = 'usd'
    } else if (money.currency === 'usd' && this.currency === 'eur'){
        newmoney.value = this.value  + money.value * 0.7
        newmoney.currency = 'eur'
    } else if (money.currency === this.currency ){
        newmoney.value = this.value + money.value
        newmoney.currency = this.currency
    }
    return newmoney;
}
Money.prototype.format = function format() {
    return Number(this.value).toLocaleString(undefined, {style: 'currency', currency: this.currency});
}
export default Money
// END