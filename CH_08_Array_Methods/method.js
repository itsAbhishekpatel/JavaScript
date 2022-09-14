// Higher order function 
/*
--> map() function - it loops and return array 
--> filter() function - it lopps and return an array with matching conditions 
--> reduce() function - reduce all number 

*/

// Map function  
let result = [10,20,30,40].map(number => number*2)
console.log(result)

const doubleMap =(number,mul) =>{
    return number.map(num => num*mul)
}

console.log(doubleMap([10,20,50],5))

//FILTER FUNCTION
const filter = (num ,greaterThan) =>{
    arr = []
    for (let i of num){
        if (i > greaterThan){
            arr.push(i)
        }       
    }
    return arr
}
// console.log(filter([1,5,6,7],5))
const num = [10,15,20,30,40]

let new_arr = num.filter(n => n >= 15 && n <= 30) // filter function check condition and use && also 
console.log(new_arr)

let new_ar = num.filter(n => n >10 || n < 5)
console.log(new_ar)

// create array of objects 
const actor = [
    {name:"jonny", networth: 2000000},
    {name:"Amber", networth: 1000000},
    {name:"Abhishek", networth: 500000}
]

netw = actor.filter(actor => actor.networth > 1000000)
console.log(netw)

// REUDCE FUNCTION
const nums = [10,20,30] 
const sum = nums.reduce(function(prev, next){
    return prev + next
})

console.log(sum) 

// fibonacci series using reduce function
// 1, 1, 2, 3, 5, 8 

// n = 5
// const fib = (n) =>{
//     for (let i in n){
//         let f = 1
//         let s = 1
//         yield
//         f = s
//         s = f+s
//         return f
//     }
// }
// for (let f in fib){
//     console.log(f)
// }

const num1 = [10,20,30,40]
const sum1 = num1.reduce((a,b) => a+b)
console.log(sum1)