// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
let nums = [2,5,1,3,4,7], n = 3;
let arr=[];

for(let i =0;i<nums.length;i++){
if(nums[i+n] !==undefined){
    arr.push(nums[i]);
    arr.push(nums[i+n])
}
}

console.log(arr);