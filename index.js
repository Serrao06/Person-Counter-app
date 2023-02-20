// document.getElementById("count-no").innerText = 5;

// let count = 5

// console.log(myAge)

//---------DOM is a document object model, aka how u use javascript to modify a website

let count = 0
let countNo = document.getElementById("count-no") //pass in arguement (document is an object)(getElementByI is a function)
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countNo.innerText = count
}

// this is a function to save the count

// function save() {
//     console.log(count)
// }

//------------ creating a test varibale for string

// let userName = "Nevil"
// let message = "you have a tree new messages"
// let messageToUser = message +", "+ userName + "!"
// console.log(messageToUser)

//------------- adding two srings and desplaying it in html

// let name = "Nevil Serrao"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)
// myGreeting = myGreeting + "😀"
// console.log(myGreeting)

// ----------------- creating a string and combining it in a short form by using += rather than count = count + 1

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Nevil Serrao"
// let greeting = "Hi, welcome "
// welcomeEl.innerText = greeting + name
// welcomeEl.innerText += " 👋"

// creating a saving viewport of old entries
// function save() {
// let finalCount = count + " - "
// saveEl.innerText += finalCount
// }

//---------- using the .textContent instead of innerText bcz it is capable of taking all inuputs
function save() {
    let finalCount = count + " - "
    saveEl.textContent += finalCount
    countNo.textContent = 0
    count = 0
}