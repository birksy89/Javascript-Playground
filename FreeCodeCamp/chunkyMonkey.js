function chunkArrayInGroups(arr, size) {

    var arrLength = arr.length;
    var newArr = [];
var i=0;
while(i<arrLength / size){

  newArr[i] = arr.slice(0, size);
  console.log(newArr[i] + "Length: " + newArr[i].length);


  if(newArr[i].length >0){

    arr.splice(0,size);
    console.log(arr);
  }

  i++
}


    console.log(newArr);
    arr = newArr;
    return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
