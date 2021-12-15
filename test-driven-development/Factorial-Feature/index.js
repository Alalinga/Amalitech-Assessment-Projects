const Calculate = {
  
  factorial(num){
    if(num===0){
      return 1;
    }
    let total=1
   for(let i=1;i<=num; i++){
       total *=i
       
   } 
   return total    
  }
}
module.exports = Calculate;



