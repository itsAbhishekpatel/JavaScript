// function to calculate total cost
const sum = (food,tipAmount)=>{
    return (food + tipAmount)

}
function total_cost(food,tip){
    const tipPercentage = tip / 100
    const tipAmount = food*tipPercentage
    return sum(food,tipAmount)
}

console.log("Total Amount will be ",total_cost(100,20))
