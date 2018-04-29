
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

var sorted = arr.sort(function compareNumbers(a, b) {
  return a - b;
});
var place=0;
console.log(sorted);

for(i=0; i<sorted.length; i++){
  console.log(arr[i] + " - " + i);

  if(arr[i] >= num){
    place = i;
    break;
  }

}

console.log("///////");
console.log(sorted);
console.log(sorted.length);
console.log(sorted[sorted.length -1]);

if(num > sorted[sorted.length -1]){
  place = sorted.length;
}




console.log(place);
num=place;
  return num;
}

getIndexToIns([2, 5, 10], 15)
