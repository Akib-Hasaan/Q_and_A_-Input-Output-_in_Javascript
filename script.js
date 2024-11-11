// Questions and Answers (Input/Output)

let input = document.querySelector("input")
let button = document.querySelector("button")
let answer = document.querySelector("span")

button.addEventListener('click', function (){
    if (input.value ="What is your name?") {
        answer.innerHTML= "My name is Robot009"
    }
    else if (input.value ="What is your age?"){
        answer.innerHTML="My age is not a part of my knowledge"
    }
    else if (input.value ="What is your age?"){
        answer.innerHTML="My age is not a part of my knowledge"
    }
})

// *EXTRA* Speech Synthesis

function ans() {
    if (input.value = "What is your name?") {
        let utterance = new SpeechSynthesisUtterance(`My name is Robot009`);
        speechSynthesis.speak(utterance);
    }
    else if (input.value = "What is your age?") {
        let utterance = new SpeechSynthesisUtterance(`My age is not a part of my knowledge`);
        speechSynthesis.speak(utterance);
    }
    else if (input.value = "What is the name of your hometown?") {
        let utterance = new SpeechSynthesisUtterance(`Beijing,China.`);
        speechSynthesis.speak(utterance);
    }
}
ans(input.value)
