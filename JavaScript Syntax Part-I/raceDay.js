let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered=false
let runnerAge=19

if(runnerAge>18 && earlyRegistered){
  raceNumber +=1000
  
}
if(runnerAge>18 && earlyRegistered){
  console.log(`Your race time is 9:30am, your race Number is ${raceNumber}`)
}else if(runnerAge>18 && !earlyRegistered){
  console.log(`Your race time is 11:00am, your race Number is ${raceNumber}`)
}else if(runnerAge<18){
  console.log(`Your race time is 12:30pm, your race Number is ${raceNumber}`)
}else{
  console.log(`Please contact the registrar at the registration desk`)
}
