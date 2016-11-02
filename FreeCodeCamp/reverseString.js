
function reverseString(str) {

  console.log(str);
var split = str.split('');

console.log(split);

var reversed = split.reverse();

console.log(reversed);

var final = reversed.join('');

console.log(final);

str = final;
  return str;
}

reverseString("hello");
