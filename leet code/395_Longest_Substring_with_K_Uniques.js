// You are given a string s consisting only lowercase alphabets and an integer k. Your task is to find the length of the 
// longest substring that contains exactly k distinct characters.
// Note : If no such substring exists, return -1. 

// Examples:
// Input: s = "aabacbebebe", k = 3
// Output: 7
// Explanation: The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.
// Input: s = "aaaa", k = 2
// Output: -1
// Explanation: There's no substring with 2 distinct characters.

 s = "aabacbebebe", k = 3;

 let count = 0;
 let max = -1;

 let left =0;
 let right =0;


 let arr = s.split('');
 let map = new Map();

 while(right<arr.length){

 
   map.set(arr[right],(map.get(arr[right])||0)+1);
   count++;
   console.log(map)
   right++;
   console.log(right,"right")
 
   while(map.size > k){
      console.log("i am in")
      map.set(arr[left],(map.get(arr[left])||0) -1);
      if(map.get(arr[left])===0){
         map.delete(arr[left])
      }
      left++;
      count--;
   }
  if(map.size === k){
      max = Math.max(count,max);
   }
 }
 console.log(max)