
function binaryAgent(str) {

var words = [];
var arr = str.split(' ');

console.log(arr);

arr.forEach(function(val){

  words.push(String.fromCharCode(binaryToDec(val)));

});


str = words.join('');

console.log(str);
  return str;

//Helper Functions
  function binaryToDec(bin){
    var dec = parseInt(bin,2);
    return dec;
  }

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
