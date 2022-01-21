"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(value) {
    switch (value) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
        default:
            return 0;
    }
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
    let filteredOrders = [];
    orders.forEach((element) => {
        let results = element.filter((ele) => ele.price < getMaxPrice(price));
        filteredOrders.push(results);
    });
    return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants, orders) {
    let counter1 = 1;
    let counter2 = 1;
    orders.forEach((ele, index) => {
        if (ele.length > 0) {
            console.log(`${restaurants[index].name} #${counter1}`);
            counter1 += 1;
            ele.forEach((item) => {
                console.log(`- Order #${counter2} ${item.name}: $${item.price}`);
                counter2 += 1;
            });
            console.log('\n');
            counter2 = 1;
        }
    });
}
/// Main
const elligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
//console.log(elligibleOrders);
printOrders(restaurants_1.restaurants, elligibleOrders);
