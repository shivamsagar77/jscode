// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

let prices = [7,1,5,3,6,4];

// let result = 0;

// for(let i=0;i<prices.length;i++){
//     console.log(i,"i")
//     for(let j=i+1;j<prices.length;j++){
//   console.log(j,"j")
//         if((result  >prices[j]-prices[i])){
//             console.log("in")
//             console.log(prices[j]-prices[i],"yes yes ")
//             result = prices[j]-prices[i]
//             console.log(result);
//          }
//     }
// }
// console.log(result)

    let result = 0;

    for(let i=0;i<prices.length;i++){
     let max=0;
     console.log(max ,"max 1")
        for(let j=i+1;j<prices.length;j++){
            console.log(prices[j],prices[i], "i j")
           
          if((prices[j]-prices[i])>max){
            console.log(prices[j]-prices[i],"j -i")
               console.log(max,"max")
               max = prices[j]-prices[i];
          }  
        }
        console.log(result,"resutt 1")
        if(max>result){
            result = max;
            console.log(result,"result answer")
        }
    }
console.log(result,"result final")

