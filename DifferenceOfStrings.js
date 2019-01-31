//Write a JavaScript function to find the difference of two arrayays?

function symmetricDifference(arrayay1, arrayay2) {
    var result = [];
    for (var i = 0; i < arrayay1.length; i++) {
      if (arrayay2.indexOf(arrayay1[i]) === -1) {
        result.push(arrayay1[i]);
      }
    }cl
    for (i = 0; i < arrayay2.length; i++) {
      if (arrayay1.indexOf(arrayay2[i]) === -1) {
        result.push(arrayay2[i]);
      }
    }
    return result;
  }
  console.log(symmetricDifference([1,2,3,6],[1,2,3,5]));