class Media{
  constructor(title){
   this._title=title;
   this._ratings=[];
   this._isCheckedOut=false;
  }

  get title(){
    return this._title
  }
  get isCheckedOut(){
    return this._isCheckedOut
  }
  get rating(){
    return this._ratings
  }
  set isCheckedOut(arg){
  this._isCheckedOut=arg
  }
toggleCheckOutStatus(){
  this._isCheckedOut=!this._isCheckedOut
}
getAverageRating(){
  return Math.floor(this._ratings.reduce((first,second)=>first+second)/this._ratings.length)
}
addRating(rate){
  this._ratings.push(rate)
}
}

class Book extends Media{
  
  constructor(author,title,pages){
    super(title)
    this._author=author
    this._pages=pages
  }
  get author(){
    return this._author
  }
  get pages(){
    return this._pages
  }
  
}
class Movie extends Media{
  
  constructor(director,title,runTime){
    super(title)
    this._director=director
    this._runTime=runTime
  }
  get director(){
    return this._director
  }
  get runTime(){
    return this._runTime
  }
  
}

const historyOfEverything= new Book('Bill Bryson','A Short History of Nearly Everything',544)
historyOfEverything.toggleCheckOutStatus()
historyOfEverything.addRating(4.5)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())
console.log(historyOfEverything._isCheckedOut)

const speed= new Movie('Jan de Bont','speed',116)
console.log(speed._isCheckedOut)
speed.addRating(1,1,5)
console.log(speed.getAverageRating())

