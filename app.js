
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

const fromEuroToDollar = function (valueInEuro) {

    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {

    let valueInYen = valueInDollar * 156.5;

    return valueInYen;
}

const fromYentoPound = function (valueInYen) {

    let valueInPound = valueInYen * 0.87;

    return valueInPound;
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound }