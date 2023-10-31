let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar) {
    return dollar * (oneEuroIs.JPY / oneEuroIs.USD);
}

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

function fromYenToPound(yen) {
    return yen * (oneEuroIs.GBP / oneEuroIs.JPY);
}


module.exports = { fromEuroToDollar };
