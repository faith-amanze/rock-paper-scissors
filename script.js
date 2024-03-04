function trans(input){
    switch(input){
        case "rook": return 1;
        case "paper": return 2;
        case "scissor": return 3;
        default: return -1;
    }
}

function result(playerInput){
    if(playerInput == -1) {
        console.log("That option is not available!!!");
        console.log("Game Over!");
        return;
    }

    const computerResult = (Math.floor(Math.random()*3)+1);

    const check = trans(playerInput.toLowerCase()) - computerResult;

    if(check == 0){
        console.log("Draw!");
    }

    if( check == 1 || check == -2){
        console.log("You Win!!");
    }

    if( check == -1 || check == 2){
        console.log("You Lose");
    }

    let computerAns = "";

    switch(computerResult){
        case 1: {computerAns = "rook"; break;}
        case 2: {computerAns = "paper"; break;}
        case 3: {computerAns = "scissor"; break;}
        default: return -1;
    }

    console.log("The computer result is: " + computerAns);
}



let playerInput;

while(true){
    playerInput = prompt("Rook, paper or scissor?");
    result(playerInput);
    let again = prompt("Do you want to play again?(Y = yes/other = no)");
    if(again != 'Y'){
        break;
    }
}
