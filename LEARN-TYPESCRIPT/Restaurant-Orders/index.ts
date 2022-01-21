import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(value:PriceBracket){
       switch (value) {
        case PriceBracket.Low:
          return 10.0;
        case PriceBracket.Medium:
          return 20.0;
        case PriceBracket.High:
          return 30.0;
        default:
          return 0;
         }
  }
/// Add your getOrders() function below:
 function getOrders(price:PriceBracket,orders:Order[][]):Order[][]{
     
      let filteredOrders:Order[][]=[];
       orders.forEach((element)=>{
        
          let results = element.filter((ele)=> ele.price < getMaxPrice(price));
          filteredOrders.push(results)
        });
       
   return filteredOrders;
 }

/// Add your printOrders() function below:

function printOrders(restaurants:Restaurant[], orders:Order[][]){
       let counter1=1;
       let counter2=1;
     orders.forEach((ele,index)=>{
       
        if(ele.length > 0){
              
             console.log(`${restaurants[index].name} #${counter1}`)
                counter1+=1;
             ele.forEach((item)=>{
                   console.log(`- Order #${counter2} ${item.name}: $${item.price}`)
                  counter2 +=1;
    })
     console.log('\n')
     counter2=1
    }
            

})
}

/// Main


const elligibleOrders = getOrders(PriceBracket.Low, orders);

  //console.log(elligibleOrders);

 printOrders(restaurants, elligibleOrders);





