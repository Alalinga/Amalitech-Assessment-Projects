const getUserChoice=(userInput)=>{
    userInput=userInput.toLowerCase();
    if(userInput==='rock' || userInput==='paper'||userInput==='scissors' || userInput==='bomb'){
  
      return userInput;
    }else{
      console.log(`the input ${userInput} is Invalid`)
    }
  }
  
  const getComputerChoice=()=>{
    const computerNumber=Math.floor(Math.random()*3)
   if(computerNumber===0){
     return 'rock'
   }else if(computerNumber===1){
     return 'paper'
   }else if(computerNumber===2)
     return 'scissors'
  }
  
  function determineWinner(userChoice,computerChoice){
    if(userChoice===computerChoice){
      return 'the game was a tie'
    }
    if(userChoice==='rock'){
      if(computerChoice==='paper'){
        return 'computer won!'
      }else{
        return 'user won!'
      }
    }
  
    if(userChoice==='paper'){
      if(computerChoice==='rock' || computerChoice==='scissors'){
       return 'Computer won!'
      }else{
        return 'User won!'
      }
    }
  
   if(userChoice==='scissors'){
     if(computerChoice==='rock' || computerChoice==='paper'){
       return 'Computer won!'
     }else{
       return 'User won!'
     }
   }
  
   if(userChoice==='bomb'){
     return 'User won!'
   }
  }
  
  // console.log(determineWinner(getUserChoice('rock'),getComputerChoice()))
  function playGame(){
    let userChoice=getUserChoice('bomb')
    let computerChoice=getComputerChoice()
    console.log(userChoice+' and '+computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
  }
  
  playGame()
  
  
  
  