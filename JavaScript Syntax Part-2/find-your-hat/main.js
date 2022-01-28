const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let right = true

const arr = [[pathCharacter, fieldCharacter, hole, hat], [fieldCharacter, fieldCharacter, hole, hat], [fieldCharacter, fieldCharacter, hole, hat]]

class Field {
    constructor(fields) {
        this.field = fields
        this.vValue = 0
        this.hValue = 0
    }

    print() {

        let filed = []
        this.field.forEach(ele => filed.push(ele.join('')))

        return console.log(filed.join('\n'))
    }

    cursor(input) {
        if (input === 'r') {
            this.vValue += 1
            
            if (this.vValue > this.field[this.hValue].length - 1) return console.log("Wrong movement!! Quting the game...."), right = false;
            if(this.field[this.hValue][this.vValue]===hole) return console.log(" Sorry!! You fell down in a hole, Try Again!"),right=false
            if(this.field[this.hValue][this.vValue]===hat) return console.log(" Congrat!! You found your hate."),right=false

            this.field[this.hValue].splice(this.vValue, 1, pathCharacter)

        }
        if (input === 'l') {
            if(this.hValue===0){
                return console.log("Can't Move Left!! Move Down=>d or Right=>r")
            }
            this.vValue -= 1
            console.log(this.field[this.hValue])
            if (this.vValue > this.field[this.hValue].length - 1) return console.log("Wrong movement!! Quting the game...."), right = false;
            if(this.field[this.hValue][this.vValue]===hole) return console.log(" Sorry!! You fell down in a hole, Try Again!"),right=false
            if(this.field[this.hValue][this.vValue]===hat) return console.log(" Congrat!! You found your hate."),right=false

            this.field[this.hValue].splice(this.vValue, 1, pathCharacter)

        }
        if (input === 'u') {
            if(this.hValue===0){
                return console.log("Can't Move Up!! Move Down=>d or Right=>r or Left=>l")
            }
            this.hValue -= 1
            if (this.hValue > this.field.length - 1) return console.log("Wrong movement!! Quting the game...."), right = false;
            if(this.field[this.hValue]===hole) return console.log(" Sorry!! You fell down in a hole, Try Again!"),right=false
            if(this.field[this.hValue]===hat) return console.log(" Congrat!! You found your hate."),right=false

            this.field[this.hValue].splice(this.vValue, 1, pathCharacter)
        }
        if (input === 'd') {
            this.hValue += 1
            if (this.hValue > this.field.length - 1) return console.log("Wrong movement!! Quting the game...."), right = false;
            if(this.field[this.hValue]===hole) return console.log(" Sorry!! You fell down in a hole, Try Again!"),right=false
            if(this.field[this.hValue]===hat) return console.log(" Congrat!! You found your hate."),right=false

            this.field[this.hValue].splice(this.vValue, 1, pathCharacter)

        }
        if (input === 'q') {
            right = false
        }
        return this.print();
    }


    static generateField(height, width) {

    }
}

const fields = new Field([['*', '░', 'O', 'O', '░', '0'],
['░', 'O', '░', '░', 'O', '░'],
['░', '^', '░', 'O', '░', '░']])
fields.print()

// clea
console.log("Enter r => Right,l => Left, u => Up and d =>  Down Or q => quit.")
while (right) {
    let input = prompt('which way? =>')
    fields.cursor(input)
}


