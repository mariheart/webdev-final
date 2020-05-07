let randOutput = document.getElementById("output");
let randButton = document.getElementById("rand-button");
var randOut;

let randList = ["What did you eat today?", "Went outside again, haven't you?", "Did you look at your phone first thing in the morning?", "Did you drink water?", "You must be really interested in those clothes.", "You haven't showered, have you?", "Caught you looking through memes.", "So how's that fanfic you're reading right now?", "Feeling lonely, huh?", "It's OK. You can tell me everything.", "Your secret's safe with me. Promise."];

randButton.addEventListener("click", textOutput);

function textOutput() {
    randOut = randList[Math.floor(Math.random() * randList.length)];
    console.log(randOut);
    randOutput.innerHTML = randOut;
}
