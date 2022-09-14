
// function which calulate number of letter in the word 
const lettercounter = (str) => {
    let count = 0
    for (let i of str){
        count += 1
    }
    return {count:count} // return as an object 
}

console.log(lettercounter("Abhishek"))
console.log("abhishek".length) // length function in the string type.
console.log("abhishek".slice(-8))
// calculate how many word in a phrase

const num = [1,5,10,20,10,50,5]
// max of number in an array 
const max = (num) =>{
    let max = num[0]
    for (let i of num){
        if (max < i){
            max = i
        }

    }
    return max

}
console.log(max(num))

// calculate frequency of letter 

const letterfreq = (phrase) =>{
    // make a frequnecy object 
    let letter_count = {}
    for (let freq of phrase){
        // console.log(i)
        //check if letter exist in frequency
        if (freq in letter_count){
            letter_count[freq] += 1
        }
             //increment the value by +1 

        // otherwise, set the value to 1  
        else{
            letter_count[freq] = 1
        }
        
    }
    return letter_count

}

console.log(letterfreq("haha"))