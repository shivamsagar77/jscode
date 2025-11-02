// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

let arr = [[1,2,3],[4,5,6],[7,8,9]];
let num = [];
let temparr=[];


for(let i=0;i<arr.length;i++){
 num[i] =[]
    for(let j=0;j<arr.length;j++){
      num[i][j] =  arr[j][i];   
    }
}
console.log(num)