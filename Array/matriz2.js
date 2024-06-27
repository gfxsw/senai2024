const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
numbers.push([5, 43, 44]);
console.log("A linha criada foi a última:", numbers);
numbers.unshift([3, 4, 7]);
console.log("A linha criada foi a primeira:", numbers);
numbers.pop();
console.log("A linha removida foi [5, 43, 44] |", numbers);
numbers.shift();
console.log("A linha removida foi [3, 4, 7] |", numbers);
