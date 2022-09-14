// array of object 
const actor = [
    {name:"jonny", networth: 2000000},
    {name:"Amber", networth: 1000000},
    {name:"Abhishek", networth: 500000}
]

let result = actor.filter(actor => actor.networth > 1000000)

console.log(result[0].name+" networth is $"+result[0].networth)



