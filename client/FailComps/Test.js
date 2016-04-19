function getAvg(arr) {
var arr=[1,2,3,4,5];
var total = 0;

  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  var average = total / arr.length;
  return average;
};
console.log(getAvg());
