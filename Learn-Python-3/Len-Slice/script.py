# Your code below:
toppings = ["pepperoni","pineapple","cheese","sausage","olives","anchovies","mushrooms"]

prices = [2,6,1,3,2,7,2]

num_two_dollar_slices = prices.count(2)
print(num_two_dollar_slices)

num_pizzas = len(toppings)
print("We sell",num_pizzas,"different kinds of pizza!")

pizza_and_prices = [[2,"pepperoni"],[1,"cheese"],[6,"pineable"],[3,"sausage"],[2,"olives"],[7,"anchovies"],[4,"mushroom"],[5,"okrani"]]
pizza_and_prices.sort()


cheapest_pizza = pizza_and_prices[0]
priciest_pizza = pizza_and_prices[-1]
pizza_and_prices.pop()
pizza_and_prices.insert(3,[2.5, "peppers"])

three_cheapest = pizza_and_prices[:3]
print("List of Pizza :", pizza_and_prices)
print("\nOur Three Cheapest Pizza:",three_cheapest)

