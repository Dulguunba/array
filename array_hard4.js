//dutuu bag shu bro

let input = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];
let sum = [];
for (let i = 0; i < input.length; i++) {
  var sumscore = 0;
  var sumscore2 = 0;
  for (let m = 0; m < input[i].length; m++) {
    sumscore += input[i][m];
    sumscore2 += input[m][i];
    console.log(sumscore2);
  }
  sum.push(sumscore);
}
