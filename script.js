'use strict'
//EXERCISES//
/////////////////// let and const ///////////////////
// let player = "Bilal" //Should be const
// let opponent = "Per" //Should be const
// let game = "Pinball" //Should be const
// const points = 0    //Should be let
// const hasWon = false    //Should be let

// points += 100
// hasWon = true

// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

/////////////////// Logging out items in an array ///////////////////
let myCourses = ["Learn CSS Animations","UI Design Fundamentals","Intro to clean Code"]

function renderAll(arr) {
    for(let i = 0; i<arr.length; i++) {
        console.log(arr[i])
    }
}
renderAll(myCourses)

/////////////////// Saving and fetching from local storage ///////////////////
localStorage.setItem("Age", "24")
console.log(localStorage.getItem("Age"))

/////////////////// AddEventListener + Objects in Arrays ///////////////////
let scores = [
    {
        player: "Bilal",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

let btnEl = document.getElementById("btn-el")
btnEl.addEventListener("click", function(){
    console.log(scores[0].score)
})

/////////////////// Generate a sentence ///////////////////
//Conditions:
// Has two paramaters, desc and array.
// Takes both of these and prints a string
// Also prints out the number of items in that array

let desceg = "Largest countries"
let items = ["China", "India", "USA"]

function generateSentence(desc,arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for(let i = 0; i< arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i] + ". "
        } else {
            baseString += arr[i] + ", "
        }
        
    } 
    return baseString  
}
console.log(generateSentence(desceg,items))

//Difficulties. Thought you could use a for loop, return the array and directly insert it into the sentence.
/////////////// Turns out you need to keep that outside the loop.

/////////////////// Render Images ///////////////////
// Idea of this challenge is to understand that databases are easier to get info from than hardcoding stuff into HTML etc
const container = document.getElementById("container")
const imgs = [
    "per1.png",
    "per2.jpg",
    "per3.jpg",
]

function renderImg(arr) {
    let imgsDOM = ""
    for(let i = 0; i<arr.length; i++) {
        imgsDOM += `<img alt="Employee profile picture" class="team-img" src="${arr[i]}">`
    }
    container.innerHTML += imgsDOM
}
renderImg(imgs)