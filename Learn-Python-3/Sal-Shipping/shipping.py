weight =8.4
#price = 0
#Ground shipping
def groundShipping(weight):
  if weight <=2:
     price = weight * 1.5 +20 
  elif weight > 2 and weight <= 6:
    price = 3.00 * weight + 20
  elif weight > 6 and weight <= 10:
    price = 4.00 * weight + 20
  elif weight > 10:
    price = 4.75 * weight + 20
  else:
    price = 0 * weight + 20
  return "${}".format(price)  

#Ground Premium shipping
cost_ground_premium = 125.00
def groundPremiumShipping():
  cost_ground_premium = 125.00
  return "${}".format(cost_ground_premium)

#Drone shipping
def droneShipping(weight):
  if weight <=2:
     price = weight * 4.5 +0.00 
  elif weight > 2 and weight <= 6:
    price = 9.00 * weight + 0.00
  elif weight > 6 and weight <= 10:
    price = 12.00 * weight + 0.00
  elif weight > 10:
    price = 14.25 * weight + 0.00
  else:
    price = 0 * weight + 0.00
  return "${}".format(price)  





print("Drone Shipping",droneShipping(41.5))
print("Ground Shipping",groundShipping(41.5))
print("Ground Shipping Premium ", groundPremiumShipping())


