let arr = [1,1,2,3,4,4,5,1,1,5,6,6,7,7,8,8,8,]
let max  = -Infinity;
for(let i=0;i<arr.length-1;i++){
     max = arr[i];
}
let secondM = -Infinity;

for(let i = 0;i<arr.length-1;i++){
    if(arr[i]<max){
        secondM = arr[i];
    }
}
console.log(secondM)

// let set = new Set(arr);
// let arrr = [...set];
// let n = arrr.length-2;
// console.log(arrr[n])


// corrent way  

function getSecondLargest(arr) {
    let largest = -1;
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {

        // Found new largest
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }

        // Found second largest
        else if (
            arr[i] > secondLargest &&
            arr[i] !== largest
        ) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}