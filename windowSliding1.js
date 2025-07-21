// Problem: Given an array of integers and a number k, find the maximum sum of a subarray of size k.

let arr = [2, 1, 5, 1, 3, 2]
let k =3;

let sum=0;
let temp =0;
for(let i=0;i<arr.length-k;i++){

    for(let j=i; j<i+k;j++){
    temp = arr[j]+temp;
    }
    sum = Math.max(sum,temp);
    temp = 0;
}
console.log(sum);