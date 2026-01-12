// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
//  That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
let  nums = [8,1,2,2,3]
   let num=0;
   let arr =[];
    for(let i=0;i<nums.length;i++){
// console.log(i,"i")
// console.log(nums[i],"nums[i] ");
        for(let j=0;j<nums.length;j++){
            // console.log(j,"j")
            if(nums[i]>nums[j]){
                // console.log(nums[i],"nums i ",nums[j],"nums j")
                num++;
                // console.log(num,"num")
            }
        }
     
        arr.push(num);
             num =0;
    }
    console.log(arr)

    // Row_with_max_1s

    Build_Array_from_Permutation
