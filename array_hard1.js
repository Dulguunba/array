// array hard task 1 = find longest increasing subsequence
let massive = [0, 1, 0, 3, 2, 3];
var numberofLegth = [];
for (let i = 0; i < massive.length; i++) {
  let reserve = [];
  let legth = 0;
  reserve.unshift(massive[i]);
  for (let k = i; k < massive.length; k++) {
    if (massive[k] < massive[k + 1]) {
      reserve.push(massive[k + 1]);
    }
  }
  legth = reserve.length;
  numberofLegth.push(legth);
}

console.log(Math.max(...numberofLegth));
