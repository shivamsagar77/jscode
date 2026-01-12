
var findDisappearedNumbers = function(nums) {
    let arr = [];
    nums.sort((a,b)=>a-b);
    let last = nums.length-1;
    let map = new Map();
    for(let i=1;i<last;i++){
        map.set(i,i);
    }
for (let [key, value] of map) {      
    if (!nums.includes(key)) {        
        arr.push(key);               
    }
}
console.log(arr)
};
let nums = [4,3,2,7,8,2,3,1];
findDisappearedNumbers(nums);