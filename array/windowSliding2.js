// First Negative Number in Every Window of Size K

// Problem: Given an array and a window size k, find the first negative number in every window of size k.

//  Output: [-1, -1, -7, -15, -15, 0]
let arr = [12, -1, -7, 8, -15, 30, 16, 28]
let k = 3
let temp = [];
for(let i=0;i<arr.length-2;i++){
    let found = false;
    for(let j=i;j<k+i;j++){
       if(arr[j]<0){
        temp.push(arr[j]);
        found = true;
        break;
       }
    }
    if(!found){
        temp.push(0)
    }
  
}
console.log(temp)
