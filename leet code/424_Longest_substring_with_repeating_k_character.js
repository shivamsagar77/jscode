// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. 
// You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

let s = "ABAB";
let  k = 2;
let max =0;
let right=0;
let left =0;
let answer=0;
let arr = s.split('');
let map = new Map();
while(right<arr.length){

    map.set(arr[right],(map.get(arr[right])||0)+1);  
    max = Math.max(max,map.get(arr[right])); 
    windowsize=right-left+1;
    if(windowsize -max>k){
        map.set(arr[left],(map.get(arr[left])||0)-1);
        left++;
    }
    
  answer= Math.max(answer,right-left+1);
    right++;
}
console.log(answer)