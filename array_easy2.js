// array easy task 2 = fibonacci sequence
let firstnum = 0;
let secondnum = 1;
let fibonacci = [firstnum, secondnum];

for (let i = 2; i < 100; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);
