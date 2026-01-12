let num = [[1,2,3,[4,5,6,[7,8,9]]],[10,11,12],[13,14,15]];


let arr = [];
function flattenArray(num){

    for(let a of num){
        if(Array.isArray(a)){
            flattenArray(a);
        }
        else{
            arr.push(a);
        }
    }
}

flattenArray(num);
console.log(arr);