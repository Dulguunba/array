//array medium task 3 = sort an array

let numbers = [5, 4, 3, 2, 1];

for (let i = 0; i < numbers.length; i++) {
  let score = 0;
  for (let k = i + 1; k < numbers.length; k++) {
    if (numbers[i] > numbers[k]) {
      score = numbers[i];
      numbers[i] = numbers[k];
      numbers[k] = score;
    }
  }
}

console.log(numbers);
