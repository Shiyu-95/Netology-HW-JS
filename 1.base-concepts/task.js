"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let discriminant = (b ** 2) - (4 * a * c);
    if ((discriminant === 0)) {
        let square = -b / (2 * a);
        arr.push(square);
    } else if ((discriminant > 0)) {
        let square_first = (-b + Math.sqrt(discriminant)) / (2 * a);
        let square_second = (-b - Math.sqrt(discriminant)) / (2 * a);
        arr.push(square_first);
        arr.push(square_second);
    }
    return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthly_percent = percent / 100 / 12;
    let credit_body = amount - contribution;
    let montly_payments = credit_body * (monthly_percent + (monthly_percent / (((1 + monthly_percent)**countMonths) - 1)));
    let whole_payments = montly_payments * countMonths;
    return Number(whole_payments.toFixed(2));
}
