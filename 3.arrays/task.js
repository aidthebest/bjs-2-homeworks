// Задача 1

const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((number, i) => number === arr2[i]);


// Задача 2
const advancedFilter = arr => arr.filter(number => (number > 0) && (number % 3 === 0)).map(number => number * 10);
