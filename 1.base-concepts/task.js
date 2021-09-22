"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0){
    arr.push();
  }  else if (d === 0){
      arr.push(-b / (2 * a));
  }  else {
      arr.push((-b + Math.sqrt(d)) / (2 * a));
      arr.push((-b - Math.sqrt(d)) / (2 * a));
  }

  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }


  // let s = amount - contribution;
  // let dateToday = new Date();
  // let month = date.getUTCMonth() - dateToday.getUTCMonth() + (date.getFullYear() - dateToday.getFullYear()) * 12;
  // let monthlyPayment = s * (percent / 12 / 100 + (percent / 12 / 100) / (((1 + percent / 12 / 100) ** month) - 1));
  // totalAmount = Number((monthlyPayment * month).toFixed(2));
  // console.log(totalAmount);
  // return totalAmount;





  let creditBody = amount - contribution;

  let creditStartDate = new Date();

  let loanDurationInMonth = (date.getFullYear() - creditStartDate.getFullYear()) * 12 + creditStartDate.getMonth() - date.getMonth();  

  let mounthlePayment = creditBody * (percent / 12 / 100 + (percent / 12 / 100) / (((1 + percent / 12 / 100) ** loanDurationInMonth) - 1));

  totalAmount = +((loanDurationInMonth * mounthlePayment).toFixed(2));

  return totalAmount;
}
