var addStr = function(str) {
  var splits = str.split(',');

  return splits.reduce(function(sum, current) {
    return sum + parseInt(current);
  }, 0);
};
