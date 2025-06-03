
let arr=[1,2,1,3,5,6,4]
const b = ()=>{
    let s=0;
    let e=  arr.length-1;
    
    while(s <= e){
        let mid = Math.floor((s+e)/2);
        if((mid ===0 || arr[mid] >arr[mid-1]) && (mid === arr.length-1 || arr[mid] > arr[mid+1])){
            return mid;
        }
        else if (arr[mid] < arr[mid - 1])
            {
         e  = mid-1;
        }
        else{
            s = mid+1;
        }
    }
    return -1;
}
console.log(b(arr));