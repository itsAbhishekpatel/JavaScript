// taking input form user, use promt funtion
const prompt = require("prompt-sync")({sigint: true}); //using to sync the 

//food calculator 
food_amt = Number(prompt("How much was the food? "))
tip_amt = Number(prompt("How much you have to tip (percentage)?"))/100 // parseInt is use to convert into string.

tip = food_amt * tip_amt // cal tip amt

console.log("Tip Amount: ",tip)
console.log("Total Amount: ",food_amt + tip)

