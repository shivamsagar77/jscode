// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

let num = [1,2,0,0], k = 34 , count=0;

let str ='';
for(let i=0;i<num.length;i++){
    str += num[i];
}
let result = parseInt(str) + k;

let convert_string = result.toString().split('').map(Number)

console.log(convert_string)




