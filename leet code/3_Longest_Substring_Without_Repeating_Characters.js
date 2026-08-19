// Given a string s, find the length of the longest substring without duplicate characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Ritich Way

// let left = 0;
// let right = 0;
// let max = 0;
// let map = new Map();
// let arr = s.split("");
// let count = 0;

// while (right < arr.length) {
    //   if (!map.has(arr[right])) {
        //     map.set(arr[right], right);
        //     max = Math.max(max, right - left + 1);
        //     right++;
        //     console.log(max, "if");
        //   } else {
            //     left = map.get(arr[right]) + 1;
            //     map.clear();
            //     map.set(arr[right], right);
            //     max = Math.max(max, right - left + 1);
            //     console.log(max, "else");
            //     right++;
            //   }
            // }
            // console.log(max);
           
           
            // My Way
  let s =  "bbbbb";
let left =0;
let right =0;
let max =0;
let map = new Map();

let arr = s.split('')
console.log(arr,"arr")
while(right<arr.length){

    console.log(map.has(arr[right]),"map has")
    if(map.has(arr[right])){
        left = map.get(arr[right])+1;
        console.log(left,"left")
    }
    map.set(arr[right],right);
    max= Math.max(max,right-left+1);
    console.log(max,"max")
    right++;
    console.log(right,"right")
}
console.log(max,"max")