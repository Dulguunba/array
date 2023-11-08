// array hard task 1 = find longest increasing subsequence
let massive = [0, 1, 0, 3, 2, 3];

for (let i = 0; i < massive.length; i++) {
  let reserve = [];
  let legth = [];
  reserve.unshift(massive[i]);
  for (let k = i; k < massive.length; k++) {
    if (massive[k] < massive[k + 1]) {
      reserve.push(massive[k + 1]);
    }
  }
  legth.push(reserve.legth);
}

// for (let j = 0; j < legth.legth; j++) {
//   let maxlegth = 0;
//   for (let n = 0; n < legth.legth; n++) {
//     if (legth[j] >= legth[n]) {
//       maxlegth++;
//     }
//   }
//   if (maxlegth == legth.legth) {
//     console.log(reserve[j]);
//   }
// }
