const button = document.querySelector(".btn");
button.addEventListener("click", result);
const par = document.querySelector("#show");

let text = "Quiz: Flags of the world";
let i = 0;
let speed = 100;

function type() {
    if (i < text.length) {
        document.querySelector("#heading").textContent +=text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();


function result(e) {
    e.preventDefault();

let points = 0;

if (document.querySelector("#answer1").checked){
    points++;
}
if (document.querySelector("#answer2").checked){
    points++;
}
if (document.querySelector("#answer3").checked){
    points++;
}
if (document.querySelector("#answer4").checked){
    points++;
}
if (document.querySelector("#answer5").checked){
    points++;
}
if(document.querySelector("#answer6").checked){
    points++;
}
if (document.querySelector("#answer7").checked){
    points++;
}

par.textContent = "Your points: " + points;

const trueAnswer = document.querySelectorAll("span")
trueAnswer.forEach(item => {
    item.classList.add("trueAnswer")
});

}