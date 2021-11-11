let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=>Math.floor(Math.random()*10)
const compareGuesses=(userGuessNumber,computerGuessNumber,secretTargetNumber)=>{
  let userTargetDifference=Math.abs(userGuessNumber-secretTargetNumber)
  let computerTargetDifference=Math.abs(computerGuessNumber-secretTargetNumber)
  if(computerTargetDifference>userTargetDifference){
    console.log('true')
    return true;
  }
  if(userTargetDifference===computerTargetDifference){
     console.log('true')
   return true; 
  }
  if(userTargetDifference>computerTargetDifference){
     console.log('false')
    return false;
  }
}

const updateScore=winner=>{
  if(winner==='human'){
     console.log('human')
    humanScore+=1
    
  }
  if(winner==='computer'){
     console.log('computer')
    computerScore+=1
     console.log(computerScore)
  }
}
const advanceRound=()=>currentRoundNumber+=1

// if(compareGuesses(5,computerGuessNumber(),generateTarget())){
//   updateScore('human')
// }else{
//   updateScore('computer')
// }




