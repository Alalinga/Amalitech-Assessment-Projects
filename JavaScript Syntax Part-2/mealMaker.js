const menu={
  _courses:{
    appetizer:[],
    mains:[],
    desserts:[],
  },
   set appetizer(appetizer){},
   set mains(mains){},
   set desserts(desserts){},
   get appetizer(){},
   get mains(){},
   get desserts(){},
get courses(){
  return {
    appetizers:this.appetizer,
    mains:this.mains,
    desserts:this.desserts

  }
},
addDishToCourse(courseName,dishName,dishPrice){
  const dish={
    name:dishName,
    price:dishPrice
  }
  this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName){
    let dishes= this._courses[courseName].length
    
    let dishNumber=Math.floor(Math.random()*dishes);
    
    return this._courses[courseName][dishNumber]
},
generateRandomMeal:function(){
let appetizer=this.getRandomDishFromCourse('appetizer')
let main=this.getRandomDishFromCourse('mains')
let dessert=this.getRandomDishFromCourse('desserts')
  
  let totalPrice=appetizer.price+main.price+dessert.price
  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The total price is $${totalPrice}.`;
}
}

menu.addDishToCourse('mains','rice',10)
menu.addDishToCourse('mains','beans',12)
menu.addDishToCourse('mains','yam',10)
menu.addDishToCourse('appetizer','malt',9)
menu.addDishToCourse('appetizer','biscuit',3)
menu.addDishToCourse('appetizer','lemon',5)
menu.addDishToCourse('desserts','fry fish',10)
menu.addDishToCourse('desserts','jollof',10)
menu.addDishToCourse('desserts','meat pie',10)
const meal=menu.generateRandomMeal()
console.log(meal)


