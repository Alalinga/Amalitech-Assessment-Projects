import { getObstacleEvents } from './computer-vision';

// Types
interface AutonomousCar{
  isRunning?: boolean
  respond: (events:Events)=>void;
}

interface AutonomousCarProps{
  isRunning?: boolean;
  steeringControl:Steering
}

interface Events{
  [obstacle: string] :boolean;
}

interface Control{
  execute: (command:string)=>void;

}

interface Steering extends Control{
       turn:(direction:string)=>void
}
//classes

class SteeringControl implements Steering{
       execute(command:string){
         console.log(`Executing: ${command}`);
       }
       turn(direction:string){
            this.execute(`turn ${direction}`)
       }
}


class Car implements AutonomousCar{
  steeringControl;
  isRunning;
  constructor(props:AutonomousCarProps){
     this.isRunning =props.isRunning;
     this.steeringControl = props.steeringControl;
  }
  respond(events:Events){
     if(!this.isRunning){
       return console.log("The car is off")
     }
     Object.keys(events).forEach((eventKey)=>{
         if(events[eventKey]){
             if(eventKey==='ObstacleLeft'){
               this.steeringControl.turn('right')
             }
             if(eventKey==='ObstacleRight'){
               this.steeringControl.turn('left')
             }
         }
     })
    // return console.log("The car is runing")
  }
}

//executions
let steering = new SteeringControl()
//steering.turn('left')
let autonomousCar = new  Car({isRunning:true,steeringControl:steering});
autonomousCar.respond(getObstacleEvents())



