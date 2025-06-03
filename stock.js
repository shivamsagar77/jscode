let arr= [12,3,4,5,89]

let min = Infinity;
let max= 0;
for(let i=1;i<arr.length;i++){

    if(arr[i] < min){
        min = arr[i];
    }
else{
    if(arr[i] > max){
        max = arr[i];
    }
}
 
}
console.log(max-min);
// console.log(min);