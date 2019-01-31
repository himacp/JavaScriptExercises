// Q 3 Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.

let num =  1025648;
var str = num.toString();
var result = [str[0]];
// logic to find the even number and put dashes
for (var x = 1; x < str.length; x++) {
  if (str[x-1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));