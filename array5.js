// max min oloh daalgavar

let numbers = [1, 3, 5, 22, 89, 46, 17, 31];
let result = [];
if (numbers.length <= 2) {
  console.log("uuchlaarai ta 3 bolon tuunees deesh too oruulna uu");
} else {
  for (let i = 0; i < numbers.length; i++) {
    let scoremax = 0;
    for (let k = 0; k < numbers.length; k++) {
      if (numbers[i] >= numbers[k]) {
        scoremax++;
      }
    }
    if (scoremax == numbers.length) {
      result.push(numbers[i]);
    }
    let scoremin = 0;
    for (let k = 0; k < numbers.length; k++) {
      if (numbers[i] <= numbers[k]) {
        scoremin++;
      }
    }
    if (scoremin == numbers.length) {
      result.push(numbers[i]);
    }
  }
}

console.log(result);
