
exports.min = function min(array) {
  if (!array || array === null || array === [] || array.length < 1) { return 0 }
  if (array.length > 1) { return Math.min(...array); }
}

exports.max = function max(array) {
  if (!array || array === null || array === [] || array.length < 1) { return 0 }
  if (array.length > 1) { return Math.max(...array); }
}

exports.avg = function avg(array) {
  if (!array || array === null || array === [] || array.length < 1) { return 0 }
  if (array.length > 1) { return (array.reduce((a, b) => a + b)) / array.length; }
}

