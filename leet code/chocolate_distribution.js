// Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 3 
// Output: 2 
// Explanation: If we distribute chocolate packets {3, 2, 4}, we will get the minimum difference, that is 2. 

let arr = [7, 3, 2, 4, 9, 12, 56], m = 3

let sortedarr = arr.sort((a,b)=>a-b);
console.log(sortedarr);
let result = Infinity;

let duplicatearr =[]; 


for(let i=0;i<arr.length-m;i++){
console.log(i,"i")
    for(let j=i;j<arr.length;j++){
        console.log(j,"j")
    duplicatearr.push(arr[j]);
    console.log(duplicatearr,"duplicate")
    if(duplicatearr.length ===m){
        break;
    }
    }

    if(result >( duplicatearr[duplicatearr.length-1] -duplicatearr[0])){
        console.log(duplicatearr[0], duplicatearr[duplicatearr.length-1],"data");
       result =  duplicatearr[duplicatearr.length-1] -duplicatearr[0] 
       console.log(result,"result")
    }
duplicatearr = []

}
console.log(result);