var numArray = [1, 20, 36, 45, 78, 27];
var max = numArray[0];
for (i = 0; i <= numArray.length; i++) {
    if (numArray[i] > max) {
        var max = numArray[i];
    }
}
console.log(max);

var findNum = (arr, number) => {
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] == number) {
            return true;
        }
    }
    return false;
}

var numfind = 36;
console.log(findNum(numArray, numfind));

console.log(numArray.length);
