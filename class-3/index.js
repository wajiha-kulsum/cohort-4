// // const fs = require("fs");
// // const contents = fs.readFileSync("a.txt", "utf-8");
// // console.log(contents);


// function add(a,b){
//     return a + b ;
// }


// function div(a,b){
//     return a/b ;
// }


// // function mul(a,b){
// //     return a * b ;
// // }

// const mul = function(a,b){
//     return a * b
// }

// function doCalculate( a, b , doOps){
//     return doOps(a, b);
// }

// // const ans11 = doCalculate(1, 2, div);
// // console.log(ans11);

// console.log(doCalculate(2,3,mul));


// convert a array of 1, 2, 3, 4 to multiple of 2
// for eg [1,2,3,4] to [2,4,6,8]

//solution 
const input = [1,2,3,4];

// const meow = [];

// for (let i = 0; i < input.length; i++){
//     meow.push(input[i] * 2);
// }

// console.log();

// another solution 


const result = input.map(function letsGo(i) {
    return i * 4
});
console.log(result);