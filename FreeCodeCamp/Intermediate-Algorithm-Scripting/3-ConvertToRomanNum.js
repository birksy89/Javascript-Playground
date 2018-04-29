function convertToRoman(num) {

    var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    console.log(decimalValue[decimalValue.length - 1]); //Last Element in array

    var roman = [];

    i = decimalValue.length -1; //13

    while (num > 0) {

        if (num < decimalValue[i]) {
          i--;
        }
        else{
          roman.push(romanNumeral[i]);
          num = num - decimalValue[i];
        }

        console.log(num);
        console.log(roman);
        console.log(i);

    }

    var arry = roman.join('');
    console.log(arry);
    return arry;
}

convertToRoman(36);
