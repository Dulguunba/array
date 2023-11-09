// find special number
let massive = [2, 4, 7, 8, 10];
let difIndex = 0;

const odd = massive.filter((num) => num % 2 === 1);

const even = massive.filter((num) => num % 2 === 0);

if (odd.length < even.length) return console.log(odd);
return console.log(even);
