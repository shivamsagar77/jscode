
function sum(...number){

    let max = 0;
    for(let i =0;i<number.length;i++){
        max += number[i]
    }
    return max;
}

const result = sum(1,2,3,4);
console.log(result);