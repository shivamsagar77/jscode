  let  nums =[3,1,3,4,2]
  
  let map = new Map();
let result =0;
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i]) ||0)+1)
    }
console.log(map)
    for(let [key ,val] of map){
        if (val>1){
            result = key
        }
    }
console.log(result)