num = [10,20,30,40,50]

// print the above array using for loop 
for ( let i = (num.length)-1; i >= 0; i--){
    console.log(num[i])
}

// its like pythonic 
for (const f of num){
    console.log(f)
}

const number = [1,2,3,4,5,6]
// sum of number in the array 
let sum = 0
for (const i of number){
    sum += i
}
console.log(sum)

// multiple of number 
let mul = []

const multiple = (n)=>
{
    for(let i = 1; i <= number.length; i++ ){
        n.push(i * 2)
    }
    console.log(n)
}

multiple(mul)

