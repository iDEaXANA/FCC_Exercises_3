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

/////////////////// Saving and fetching from local storage ///////////////////
/////////////////// Saving and fetching from local storage ///////////////////
/////////////////// Saving and fetching from local storage ///////////////////
/////////////////// Saving and fetching from local storage ///////////////////
/////////////////// Saving and fetching from local storage ///////////////////
