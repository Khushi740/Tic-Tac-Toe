let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgBtn = document.querySelector("#msg-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count =0;
const winPatTerns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turnO === true) {
      box.innerText = "0";
      box.style.color = "#B8E1FF";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#94FBAB";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();

    if(count ===9 && !isWinner ){
        gameDraw();
    }
  });
});
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disable();
};

const newGame = () =>{
     turnO =true;
      count=0;
     enable();
     msgContainer.classList.add("hide");
}
const disable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
}
const checkWinner = () => {
  for (let pattern of winPatTerns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        
        showWinner(pos1Val);
    }
  }
  }
};

msgBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", newGame);

