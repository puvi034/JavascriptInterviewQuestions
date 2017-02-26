/**
 * Created by Puneeth T S on 2/25/17.
 *
 * Problem: Given a array A and a number X , check for pair in array A with sum X.
 */
// Method -1
function pairOfIntegersSum(arr, sum) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error("Expected to be an array");
  }
  if (typeof sum !== 'number') {
    throw new error("Expected to be a Number");
  }
  let sortedArr = arr.sort();
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let cSum = sortedArr[i] + sortedArr[j];
    if (cSum > sum) {
      j--;
    } else if (cSum < sum) {
      i++;
    } else {
      console.log(sortedArr[i] + "," + sortedArr[j]);
      i++;
      j--;
    }
  }
};

//Method - 2
function pairOfIntegerSum(arr, sum) {
  if(Object.prototype.toString.call(arr) !== '[object Array]'){
    throw new Error("Expected to be a Array");
  }
  if(typeof sum !== 'number'){
    throw Error("Expected to be a Number")
  }

  var result = {};
  for(let i = 0; i < arr.length - 1; i++){
    var res = sum - arr[i];
    if(arr.indexOf(res) > -1 && (result[arr[i]] !== "printed" || result[arr[arr.indexOf(res)]] !== "printed")) {
      console.log(arr[i]+ "," + arr[arr.indexOf(res)]);
      result[arr[i]] = "printed";
      result[arr[arr.indexOf(res)]] = "printed";
    }
  }
}
