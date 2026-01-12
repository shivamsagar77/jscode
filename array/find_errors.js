
let nums=[1,3,3]
    
    let arr= [];
    for(let i=0;i<nums.length;i++){
        if(nums[0]>1){
            console.log("first loop")
           if(nums[i]<=nums[i+1]){
            arr.push(nums[i]);
            arr.push(nums[i]-1);
console.log(arr);     
return;
      }
           }

        if(nums[i]===nums[i+1]){

         console.log(nums[i],"I",nums[i-1],"i-2")
            if(nums[i]> (nums[i-1])){
                arr.push(nums[i]);
                arr.push(nums[i]-1);
console.log(arr);        
return;
}
            arr.push(nums[i])
            arr.push(nums[i]+1)
        }
    }
console.log(arr);