
function sum(fromN, toN) {
  if (toN === fromN) return fromN;
  return toN + sum(fromN, toN - 1);
}

//console.log(sum(1, 10));

module.exports = sum;