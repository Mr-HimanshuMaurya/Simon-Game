let gameSeq = [];
let userSeq = [];
let btns =["red","green","yellow","purple"];
let h2= document.querySelector("h2");
let body = document.querySelector("body")

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is Started");
        started = true;
    levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let ranidx = Math.floor(Math.random() * 4);
    let rancolor = btns[ranidx];
    let ranbtn = document.querySelector(`.${rancolor}`);
    gameSeq.push(rancolor);
    console.log(gameSeq);
    gameFlash(ranbtn);
}
function checkans(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your sore was <b>${level}</b> <br> Press any key to restart the game` ;
        body.classList.add("bg")
        setTimeout(function(){
            body.classList.remove("bg")
        },200)
        reset();
    }
}
function btnpress(){
     let btn = this;
    gameFlash(btn);

    usercolor = btn.getAttribute("id")
    userSeq.push(usercolor);
    checkans(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".box")
for(box of allbtns){
box.addEventListener("click", btnpress)};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}