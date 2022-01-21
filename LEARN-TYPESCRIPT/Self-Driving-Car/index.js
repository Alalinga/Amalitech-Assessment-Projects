"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
//classes
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (!this.isRunning) {
            return console.log("The car is off");
        }
        Object.keys(events).forEach((eventKey) => {
            if (events[eventKey]) {
                if (eventKey === 'ObstacleLeft') {
                    this.steeringControl.turn('right');
                }
                if (eventKey === 'ObstacleRight') {
                    this.steeringControl.turn('left');
                }
            }
        });
        // return console.log("The car is runing")
    }
}
//executions
let steering = new SteeringControl();
//steering.turn('left')
let autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
