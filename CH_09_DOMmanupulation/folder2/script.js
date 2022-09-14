
// grabbing the box
let redDiv = document.getElementById("red")
let yellowDiv = document.getElementById("yellow")
let greenDiv = document.getElementById("green")

// redDiv.onclick = () => {
//     console.log("red")
//     // its not showing on DOM but in console
// }

// yellowDiv.onclick = () => {
//     console.log("yellow")
// }

// greenDiv.onclick = () => {
//     console.log("green")
// }

// select all of same class name and return object 
const squares = document.querySelectorAll('.colorbutton')
console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

//forEach loop
squares.forEach(square => console.log(square.value))

// onclick it update the value on click 
// squares.forEach(square =>{
//     square.onclick = () => console.log(square.value)
// })

// create an object which store the click values 
const timesClecked = {'red':0,'yellow':0,'green:':0 }

squares.forEach(square =>{
    square.onclick = () =>{
        timesClecked[square.value] +=1 
        square.innerText = timesClecked[square.value]
    }
})

const clearscore = () => {
    timesClecked.red = 0
    timesClecked.yellow = 0
    timesClecked.green = 0
    squares.forEach(square => {
        square.innerText = ''
    })
}

const clearGameBtn = document.getElementById('clear')
clearGameBtn.onclick = clearscore()
