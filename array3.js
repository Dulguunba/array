//tegsh eyreg toonuudiin niilber oloh
let numbers = [2, -3, 5, 6, -8, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 == 0) {
    sum += numbers[i];
  }
}

console.log(sum);
