var boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let body=document.querySelector("body");
let win=document.querySelector(".win");
let newgameBtn=document.querySelector(".newgame");
let msgcontainer=document.querySelector(".msg-container");

 
let turn =true;
let winarr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const boxDisabled =() => {
    for (let box of boxes){
        box.disabled=true;
    }
}


const checkWinner= () => {
    for (let pattern of winarr){
        //console.log(pattern[0],pattern[1],pattern[2])
        //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // )
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if (pos1Val!="",pos2Val!= "" ,pos3Val!= ""){
            if (pos1Val==pos2Val && pos1Val==pos3Val){
                // console.log("winner",pos1Val);
                win.innerText=`Congratulations! ,Winner is ${pos1Val}`;
                msgcontainer.classList.remove("hide");
                boxDisabled();
            }
        }
    }
}

const entry= (box)=> {
    
    if (turn==true){
        box.innerText="X";
        turn= false;
    }
    else{
        box.innerText="O";
        turn=true;
    }
    box.disabled=true;

    checkWinner();
};
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        // console.log("clicked");
        entry(box);
    });
});

const boxEnable =() => {
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgcontainer.classList.add("hide");
    }
}

const resetGame = () => {
    turn=true;
    boxEnable();
}

const newgame = () => {
    turn=true;
    boxEnable();
}
resetBtn.addEventListener("click",resetGame);
newgameBtn.addEventListener("click",resetGame);