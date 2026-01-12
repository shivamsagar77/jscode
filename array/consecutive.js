
let nums = [1,1,0,1,1,1]


    let count = 0;
    let result=0;
    for(let i=0;i<nums.length;i++){
      
        if(nums[i]===1){
            result++;
             if(count<result){
                count = result
            }
        }else{
          
            result=0;
        }
    }
console.log(count)
