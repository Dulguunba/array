//chunk
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let insert = 4;
let emptyArr = [];

for (let i = 0; i < numbers.length / insert; i++) {
  emptyArr.push(numbers.slice(i * insert, i * insert + insert));
}

console.log(emptyArr);
