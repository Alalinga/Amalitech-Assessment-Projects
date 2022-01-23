letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 4, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]

letter_to_points = {key:value for key, value in zip(letters,points)}

letter_to_points[" "]=0

print(letter_to_points)
def score_word(word):
  point_total = 0
  for letter in word.upper():
    if letter in letter_to_points.keys():
      point_total +=letter_to_points[letter]
  return point_total

player_to_words={"player1":["BLUE","TENNIS","EXIT"],"wordNerd":["EARTH","EYES","MACHINE"],"Lexi Con":["ERASER","BELLEY","HUSKY"],"Prof Reader":["ZAP","COMA","PERIOD"]}

player_to_points ={}

def update_point_totals():
  for key, words in player_to_words.items():
    player_points = 0
    for word in words:
      player_points +=score_word(word)
    player_to_points[key]=player_points
  return player_to_points
  
#a function that would take in a player and a word, and add that word to the list of words they’ve played
def play_word(player, word):
  words = player_to_words[player]
  words.append(word)
  return update_point_totals()

# function call
play_a_word = play_word('player1',"brown")

print(play_a_word)



