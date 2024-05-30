let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let score = 0;


function one(){
    score+=1;
    scoreHome.textContent = score;
}

function two(){
    score+=2;
    scoreHome.textContent = score;
}

function three(){
    score+=3;
    scoreHome.textContent = score;
}

function onee(){
    score+=1;
    scoreGuest.textContent = score;
}

function twoo(){
    score+=2;
    scoreGuest.textContent = score;
}

function threee(){
    score+=3;
    scoreGuest.textContent = score;
}

function reset(){
    score = 0;
    scoreGuest.textContent = score;
    scoreHome.textContent = score;
}
