"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  switch (d) {
    case (d < 0):
      arr.push();
      break;

    case (d === 0 ):
      arr.push(-b / (2*a))
      break;

    case (d > 0):
      arr.push(-b + Math.sqrt(d) / (2 * a));
      break;
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
