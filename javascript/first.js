// let guessno = 25;

// let userinput = prompt("guess the number");

// while(userinput !=guessno){
//  userinput = prompt("guesss again ");

// }
// console.log("bhadhai ho");


// const arr = [1,2,5,8,7,9];

// const er = arr.reduce((res,curr)=>{
//   return  res>curr?res:curr;
// })
// console.log(er)



// if(guessno == userinput){
//     console.log("you guessed right");
// }else{
//     console.log("you guess wrong");
// }


// const getpromise = ()=>{
//  return  new Promise((resolve, reject)=>{
//     console.log("124");
//     // resolve("success");
//     reject("rejected")
//   })
// }

// let promise = getpromise();
// promise.then((res)=>{
//   console.log("payment successfull",res);
// })

// promise.catch((err)=>{
//   console.log("payment unsuccessfull",err);
// })
 function asyncfunc(one){
return new Promise((resolve,reject)=>{
 setTimeout(()=>{
  console.log(one);
  resolve("success")
 },3000)
})
 }
//  let promise=asyncfunc();
 
//  promise.then((res)=>{
//  console.log("this is promise",res);
//  })


function asyncfunc2(){
  return new Promise((resolve,reject)=>{
setTimeout(()=>{
  resolve("resolve async2")
},5000)
  })
}

// asyncfunc().then((res)=>{
//   console.log(res);
//   console.log("getting data 2")
//   asyncfunc2().then((res)=>{
//     console.log(res);
//     console.log("getting data 3");
//     asyncfunc().then((res)=>{
//       console.log(res);
//     })
//   })
// });

asyncfunc(1).then((res)=>{
 return asyncfunc(2);
}).then((res)=>{
  return asyncfunc(3);
}).then((res)=>{
  console.log("success")
})
// let p2 = asyncfunc2();
// p2.then((res)=>{
//   console.log("p2",res)  
// })

// let p1 = asyncfunc();
// console.log("getting data 1")
// p1.then((res)=>{
//   console.log("getting data 2");
//   p2 = asyncfunc2();
//   p2.then((res)=>{
//     console.log(res)
//   })
// })