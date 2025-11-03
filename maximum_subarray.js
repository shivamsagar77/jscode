// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

let nums = [5,4,-1,7,8]

let num = 0;
let sum = nums[0]+nums[1]  

for(let i=1;i<nums.length;i++){
console.log(i,"i")

  for(let j=i+1;j<nums.length;j++){
console.log(j,"j")
     if(sum<0 && num <0){
        console.log(sum,num,"sum num")
        break;
     }else{
        sum += nums[j];
console.log(sum,"sum")
if(sum >num){
    num = sum;
}
     }
  }
  sum =0;
}
console.log(num)