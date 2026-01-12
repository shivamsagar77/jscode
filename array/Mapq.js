let arr = [1,1,1,2,2,2,2,2,2,2,2];

function ll(){
let map = new Map();
// map.set("key",1);
// console.log(map.set(1, "shivam"))
// 1="lsjf";
// console.log(map.set(2))
// console.log(map.set(3))
// console.log(map);
// console.log(map.get(1));
// console.log(map.get("key"));


for(let  i=0;i<arr.length;i++){
 map.set(arr[i],(map.get(arr[i])||0)+1);
}
// for(key of map){
//     console.log(key);
// }
// console.log(map.key);
// // console.log(map.get(1)||+1);
for(const [s, h] of map){
    if(h >arr.length/2){
    return s;
    }
 }
 return -1;
// console.log("-1")
}
// console.log(map);
console.log(ll(arr));