// find max subarray sum

let sample = [1, -2, 3, 4, -1, 2, 1, -5, 4];
let minsample = 2;
let sum = [];
let result = 0;

for (let i = 0; i < sample.length; i++) {
  // sample aar index eer guilgene
  for (let j = 1; j < sample.length + 1; j++) {
    // i index ees hoih j index hurtel slice hiij submassive uusgeh
    let subMassive = sample.slice(i, j); //slice
    subMassive.toString().split(","); // slice subarray uusgej bga tul split hiih
    let sumofMassives = 0;
    for (let n = 0; n < subMassive.length; n++) {
      // array iin sum tootsoh
      sumofMassives += subMassive[n];
    }
    sum.push(sumofMassives); //submassive buriin sum uudaar array uusgeh
  }
}

for (let m = 0; m < sum.length; m++) {
  // sum uudiin array aas max iig n oloh

  result = Math.max(...sum);
}
//   maxscore = 0;
//   for (let s = 0; s < sum.length; s++) {
//     if (sum[m] >= sum[s]) {
//       maxscore++;
//     }
//   }
//   if (maxscore == sum.length) {
//     result = sum[m];
//   }
// }

console.log(result);
