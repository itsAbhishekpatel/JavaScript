// DOM -> Document object model 

// const { message } = require("prompt")

// console.log("hello! Abhishek")
let titlediv = document.getElementById("title")
let message = 'Hey How are you'
titlediv.innerText = message;
titlediv.innerHTML = "<h1>"+ message+"</h1>"
titlediv.style.color = "green"
titlediv.style.backgroundColor = "red"

