function getSleepHours(day){
    day=day.toLowerCase()
    switch(day){
      case 'monday':
      return 8;
      case 'tuesday':
      return 4;
      case 'wednesday':
      return 5;
      case 'thursday':
      return 3;
      case 'friday':
      return 6;
      case 'saturday':
      return 8;
      case 'sunday':
      return 7;
      default:
      return 0
    }
  }
  const getActualSleepHours= ()=>getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday')
  
  const getIdealSleepHours=(sleepHours)=>{
    let idealHours=sleepHours*7
    return idealHours
  }
  
  const calculateSleepDebt=()=>{
    let actualSleepHours=getActualSleepHours()
    let idealSleepHours=getIdealSleepHours(7)
    let overOrUndersleepHours=0
  
    if(actualSleepHours===idealSleepHours){
  
      console.log('User got the perfect amount of sleep')
    }else if(actualSleepHours>idealSleepHours){
      overOrUndersleepHours=actualSleepHours-idealSleepHours
      console.log('the User got more sleep than needed. Over slept hours '+overOrUndersleepHours)
    }else if(actualSleepHours<idealSleepHours){
  overOrUndersleepHours=idealSleepHours-actualSleepHours
      console.log('User should get some rest! User need to rest for '+overOrUndersleepHours+' hours')
    }
  }  
  calculateSleepDebt()
  
  