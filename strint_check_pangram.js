// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true

// Input: sentence = "leetcode"
// Output: false
let  sentence = "thequickbrownfoxjumpsoverthelazydog";
let set = new Set();


for(let ch of sentence){
    set.add(ch);
}

if(set.size === 26){
   console.log(true)
}else{
console.log(false)
}