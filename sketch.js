/*Front code courtesy of https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm*/
var video = document.querySelector("#videoElement"); //Video
var answer = document.getElementById("tell-me").value; //Answer input
var answerButton = document.getElementById("ans-button"); //Answer button
var inpOut = document.getElementById("inp-output"); //Answer display
var outNum = document.getElementById("outNum"); //list length

let answerList = []; //Holds answers you used
answerButton.addEventListener("click", appendAnswer);
answerButton.addEventListener("click", showOutput);
answerButton.addEventListener("click", showNum);

/*FUNCTION TO STREAM WEBCAM*/
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Silly human. Turn on your screen! Let us see your pretty face...");
      alert("Silly human. Turn on your screen! Let us see your pretty face... (Please refresh and click 'Accept')");
      location.reload();
    });
}


/*FUNCTIONS FOR THE ANSWERBUTTON */
function appendAnswer() {
  var answer = document.getElementById("tell-me").value;
  answerList.push(answer);
  console.log(answerList);
}

function showOutput() {
  var answer = document.getElementById("tell-me").value;
  inpOut.innerHTML = "'" + answer + "'";
}

function showNum() {
  outNum.innerHTML = answerList.length + " responses";
  outNum.style.fontSize = answerList.length + "px";
  if (answerList.length >= 20) {
    outNum.innerHTML = "You must be getting lonely.";
    outNum.style.fontSize = 20 + "px";
  }
}


/*End of front code*/

/*
let capture;

function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO)
  capture.size(500, 500);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 1500, 1000);
}
*/
