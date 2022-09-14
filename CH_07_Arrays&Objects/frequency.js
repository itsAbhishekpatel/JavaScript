// function to Find frequency of letters
const letterfrequency = (pharse) => {
    // object to add frequency of letter
    let lettercount = {}

    for (let i of pharse) {
        // if letter is already in object
        if (i in lettercount) {
            lettercount[i] += 1 // increment the object value 
        }
        // else add the letter in object
        else {
            lettercount[i] = 1
        }

    }
    return lettercount

}

// console.log(letterfrequency("Abhishek"))

// increment operator 
// += , *=, -=, /=, ++, --

// frequency of letter in a phrase 

const wordfreq = (pharse) => {
    const arr = pharse.split(" ") // split function separate the words in letter and return an array.
    // console.log(arr)
    let wordcount = {} //empty object 
    for (let freq of arr) {
        if (freq in wordcount) {
            wordcount[freq] += 1
        }
        else {
            wordcount[freq] = 1
        }
    }
    return wordcount
}

console.log(wordfreq("lol lol I am yo yo.")) // call the function and print the return value.

