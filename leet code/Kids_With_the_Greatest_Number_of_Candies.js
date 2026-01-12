// There are n kids with candies. You are given an integer array candies, where each candies[i]
//  represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies,
//  they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

//  Input : candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 


let candies = [2,3,5,1,3], extraCandies = 3;
let max = 0;
let arr = [];
for(let i=0;i<candies.length;i++){
if(candies[i]>max){
    max = candies[i];
}
}
for(let i=0;i<candies.length;i++){
if((candies[i]+extraCandies) >= max){
    arr.push(true);
}else{
    arr.push(false);
}
}
console.log(arr)
number_of_good_pairs