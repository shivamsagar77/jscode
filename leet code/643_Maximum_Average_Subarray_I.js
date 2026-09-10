// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and 
// return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

 let  nums  = [1,12,-5,-6,50,3], k = 4;
let average =0;
let currentaverage=0;
let left =0;
let right = k-1;
let sum =0;

for(let i=left;i<=right;i++){
    console.log("in")
sum += nums[i];
}

let maxsum = sum;
while(right<nums.length-1){
    sum -=nums[left];
    left++;
    right++;
    sum +=nums[right];
    maxsum = Math.max(sum,maxsum);
}

console.log(maxsum/k,"answer")