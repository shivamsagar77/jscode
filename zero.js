let arr = [1,0,0,3,4];
let num = 1;
let sum = [];
for (let i = 0; i < arr.length; i++){
  if (arr[i] === 0) {
    sum.slice(1,(sum.length - num));
    i++;
  } else {
    
  sum.push(arr[i]);
  }
}
console.log(sum);