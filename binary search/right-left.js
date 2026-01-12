const searching=(nums, tar)=>{
    nums = [5,7,7,8,8,10], tar = 8

    const findleft= (nums , tar)=>{
        let left =0;
        let right= nums.length-1;
        let result = -1;
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid] === tar ){
             result = mid;
             right = mid -1;   
            }
            else if(nums[mid] <tar){
                left = mid+1;
            }
            else{
                right= mid-1;
            }
        }
        return result;
    }
    const findRight=(nums , tar)=>{
        let left =0;
        let right= nums.length-1;
        let result = -1;
    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]=== tar){
            result = mid;
            left = mid+1;
        }
        else if(nums[mid] >tar){
            right = mid-1;
        }
        else{
            left= mid+1;
        }
    }
    return result;
    }
      const left = findleft(nums , tar);
      const right = findRight(nums , tar);
      
      if(left === -1){
          return [-1, -1]
        }
        return [left , right]
}

console.log(searching()); 

