// Given an array of positive integers nums and a positive integer target,
//  return the minimal length of a subarray whose sum is greater than or equal to target. 
//  If there is no such subarray, return 0 instead.

// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// 1 way 

nums =[1,1,1,1,1,1,1,1];

let left =0;
let right =0;
let sum =0;
let min = Infinity;
let target = 11;
let count =0;
// console.log( right<nums.length-1,"condition")
while(left<=right && right<nums.length){

    console.log(left,"left");
    console.log(right,"right")
    console.log(sum,"sum");
    console.log(target,"target")
    if(sum <target){
        sum +=nums[right];
console.log(sum,"sum<target")
        right++;
                count++;
}else if(sum >target){
       sum -= nums[left];
       console.log(sum,"sum sum >target")
       count--;
       left++;
       console.log(left,"left  sum >target")
    }else{
                left++;
                min = Math.min(min,count);
        console.log(min,"min")

    }
}
if(min == Infinity){
    console.log(0)
}


// 2  way 


let nums =[1,1,1,1,1,1,1,1];
// let target = 11;
// let left = 0;
// let right = 0;
// let count = 0;
// let sum = 0;
// let min = Infinity;
while(right < nums.length){
    console.log(left,"left start");
    console.log(right,"right start")
    console.log(sum,"sum start")
    if(sum <= target){
        sum += nums[right];
        right++;
        console.log(sum,"sum < target")
        count++;
    }else{
        sum -= nums[left];
        console.log(sum,"else sum")
        console.log(left,"else left")
        console.log(right,"else right")
        console.log(count,"else count")
        left++;
        count--;
        console.log(count,"else count 2")
        min = Math.min(min,count);
        console.log(min,"min")
    }
}

console.log(min == Infinity ? 0:min);
// console.log(min)