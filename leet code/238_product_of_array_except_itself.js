// Given an integer array nums, return an array answer such that answer[i] is equal to the product of 
// all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


let nums = [1, 2, 3, 4];


let leftArray =[];
let rightArray =[];
let result = [];

 leftArray[0] = 1;
 rightArray[0]= 1;

 for(let i=0;i<nums.length-1;i++){
     leftArray.push(leftArray[i]*nums[i]);
 }

  nums.sort((a,b)=>b-a)

  for(let i=0;i<nums.length-1;i++){
     rightArray.push(rightArray[i]*nums[i]);
 }

console.log(leftArray);
console.log(rightArray);
rightArray.sort((a,b)=>b-a);

for(let i=0;i<=leftArray.length-1;i++){

    result.push(leftArray[i]*rightArray[i])
}

console.log(result);