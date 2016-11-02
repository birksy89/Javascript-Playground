
function pairElement(str) {

var arr = str.split('');
var dna= [];

arr.forEach(function(val){
  console.log(val);

  switch(val){
    case "G":
    dna.push(["G", "C"]);
    break;
    case "C":
    dna.push(["C", "G"]);
    break;
    case "A":
    dna.push(["A", "T"]);
    break;
    case "T":
    dna.push(["T", "A"]);
    break;
  }

});


  console.log(arr);
  console.log(dna);
  return dna;
}

pairElement("GCG");
