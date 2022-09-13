/*  baby weather app 
if rain 'Grap the umbrella '
else where your sunglasses 

*/
const prompt = require("prompt-sync")({sigint: true});
let weather = prompt("How is the weather?")

if (weather == "rainy"){
    console.log("Grab your Umbrella!")
} else{
    console.log("Where your sunglasses.")
} 

/* conditional operator 
1. == - check for equality
2. === - check for equality and data types 
3. <, >, <=, >= ,!=, !==
*/

