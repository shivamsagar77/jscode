nums = [-1,0,1,2,-1,-4];

nums.sort((a,b)=>a-b);
let n= nums.length;
let result = [];
for(let i=0;i<n-2;i++){

    if( i >0 && nums[i]=== nums[i-1]){
        continue;
    }
    let left = i+1;
    let right = n-1;
    let sum = -1*nums[i];
let temparray =[];
  while(left<right){
    let s = nums[left]+nums[right] ;
    if(s ===sum){
        temparray.push(nums[i]);
        temparray.push(nums[left]);
        temparray.push(nums[right]);
        left++;
        right--;
        result.push(temparray);
        temparray = [];
    }
    while(left<n && nums[left]===nums[left-1] ){
        left++;
    }
    while(right >= 0 && nums[right]===nums[right+1]){
        right--;
    }
     if(sum <s){
     left++;
  }
  if(sum > s){
    right--
  }
  }
 


}
console.log(result);