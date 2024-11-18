function getComputerChoice(){
    let randomnum = Math.floor(Math.random() * 10);
    let choice;
    if (randomnum >= 0 && randomnum<=3){
        choice = 'stone';
    }else if (randomnum >3 && randomnum <=6){
        choice='paper';
    }else{
        choice = 'scissor';
    }
    return choice;

}

function getUserChoice(){
    let userChoice = prompt("Enter ur choice rock, paper or scissor").toLowerCase()
    return userChoice
}

function determineWinner(userChoice, choice){

    if (userChoice == choice){
        return "It's a tie!!";
    }
    if (
        (userChoice=='stone' && choice=='scissor') || 
        (userChoice=='paper' && choice=='stone') ||
        (userChoice=='scissor' && choice=='stone')
    ){
        return "You win!!!";
    }
    else{
        return 'Computer Winss!!!!!'
    }
}

let userChoice=getUserChoice();
let computerchoice = getComputerChoice();
let result = determineWinner(userChoice, computerchoice);

alert(`Computer chose: ${computerchoice}\nYour choice: ${userChoice}\nResult: ${result}`);
