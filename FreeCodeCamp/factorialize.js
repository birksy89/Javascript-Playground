
function factorialize(num) {

  //console.log(num);

  var total = num;

for(i= num; i >1; i--){
  //console.log(i);

  total *= i-1;

  console.log(total);


}



num = total;

if(total == 0 ){
  num = 1;
}
console.log(num);
  return num;
}

factorialize(0);
