import datetime
date = datetime.datetime.now()
brunch_items = {
  'pancakes': 7.50, 'waffles': 9.00, 'burger': 11.00, 'home fries': 4.50, 'coffee': 1.50, 'espresso': 3.00, 'tea': 1.00, 'mimosa': 10.50, 'orange juice': 3.50
}

early_bird_items ={'salumeria plate': 8.00, 'salad and breadsticks (serves 2, no refills)': 14.00, 'pizza with quattro formaggi': 9.00, 'duck ragu': 17.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 1.50, 'espresso': 3.00,
}

dinner_items ={'crostini with eggplant caponata': 13.00, 'ceaser salad': 16.00, 'pizza with quattro formaggi': 11.00, 'duck ragu': 19.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 2.00, 'espresso': 3.00,
}

kids_items={'chicken nuggets': 6.50, 'fusilli with wild mushrooms': 12.00, 'apple juice': 3.00
}

arepas_menu ={'arepa pabellon': 7.00, 'pernil arepa': 8.50, 'guayanes arepa': 8.00, 'jamon arepa': 7.50
}
menu_list=[
  {"name":"brunch","start_time":11, "end_time":16},
  {"name":"early_bird","start_time":15, "end_time":18},
  {"name":"dinner","start_time":17, "end_time":23},
  {"name":"kids","start_time":11, "end_time":21}
]

class Menu:
  def __init__(self,name, items, start_time, end_time):
    self.name=name
    self.items=items
    self.start_time=start_time
    self.end_time=end_time
  
  def __repr__(self):
    return "{} menu  available from {} to {}".format(self.name,self.start_time,self.end_time)
  def calculate_bill(self,purchased_items):
    total_price=0
    for name in purchased_items:
      total_price += self.items[name]  
    return total_price

brunch = Menu("brunch",brunch_items,'11am','4pm')

early_bird = Menu("early_bird",early_bird_items,'3pm','6pm')

dinner = Menu("dinner",dinner_items,'5pm','11pm')

kids = Menu("kids",kids_items,'11am','9pm')

print(brunch)
print(brunch.calculate_bill(["pancakes","home fries","coffee"]))

print(early_bird.calculate_bill(["mushroom ravioli (vegan)","salumeria plate"]))

class Franchise:
  def __init__(self,address,menus):
    self.address = address
    self.menus = menus
  def __repr__(self):
    return "{}".format(self.address)  
  def available_menus(self,time):
    menus_available=[]
    for menu in self.menus:
      if time >= menu["start_time"] and time <= menu["end_time"]:
        menus_available.append(menu["name"])

    return menus_available


flagship_store = Franchise("1232 West End Road",menu_list)
new_installment = Franchise("12 East Mulberry Street",menu_list)
arepas_place = Franchise("189 Fitzgerald Avenue",arepas_menu)

print(flagship_store)
print(flagship_store.available_menus(12))
print(flagship_store.available_menus(17))

class Business:
  def __init__(self,name,franchises):
    self.name = name
    self.franchises = franchises
  def __repr__(self):
    return "{} is located at {}".format(self.name,self.franchises)

new_bussiness = Business("Take a' Arepa",arepas_place)
print(new_bussiness)


