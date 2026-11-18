let arr = [1,2,3,4,5,6];
let k = 2;

// output = 5,6,1,2,3,4

let reversearray = arr.reverse();

// 6,5,4,3,2,1
let newarray = [];

for(let i =0;i<k;i++){
    newarray.push(reversearray[i]);
}

newarray.reverse();
arr.reverse();
for(let i=0;i<arr.length-k;i++){
    newarray.push(arr[i])
}

console.log(newarray)