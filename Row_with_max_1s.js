// You are given a 2D binary array arr[][] consisting of only 1s and 0s. 
// Each row of the array is sorted in non-decreasing order. 
// Your task is to find and return the index of the first row that contains the maximum number of 1s. If no such row exists, return -1.

// Note:

// The array follows 0-based indexing.
// The number of rows and columns in the array are denoted by n and m respectively.
// Examples:

// Input: arr[][] = [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
// Output: 2
// Explanation: Row 2 contains the most number of 1s (4 1s). Hence, the output is 2.
// Input: arr[][] = [[0,0], [1,1]]
// Output: 1
// Explanation: Row 1 contains the most number of 1s (2 1s). Hence, the output is 1.

let arr = [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]];
let k =-1
let max=0;
for(let i=0;i<arr.length;i++){
    // console.log("i")
    let num =0
for(let j=0;j<arr[i].length;j++){
    // console.log(arr[i][j],"arr i j")
    if(arr[i][j]===1){
        num++;
    }
}
if(num>0 && max < num){
    max =i
}
num=0
}
console.log(max)