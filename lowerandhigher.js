let arr = [14,18,19,20,25];

 function missingRanges(arr, lower, upper) {
    // code here
    let result=[];
    let prev = lower-1;
    
  for(let i=0;i<arr.length;i++){
      let sum = arr[i];
      if(sum-prev >1){
          result.push([prev+1,sum-1]);
      }
      prev = arr[i];
  }
  return result;
}
console.log(missingRanges(arr,10,50));