function confirmEnding(str, target) {

  tl = target.length;
  console.log(tl);

  var strEnd = str.substring(str.length - tl);
  console.log(strEnd);

if(strEnd === target){
  str = true
}
else{
  str=false
}
console.log(str);
  return str;
}

confirmEnding("Bastian", "n");
