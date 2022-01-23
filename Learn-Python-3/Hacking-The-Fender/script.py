import csv, json
compromised_users = []

slash_null_sig = """
_  _     ___   __  ____             
/ )( \   / __) /  \(_  _)            
) \/ (  ( (_ \(  O ) )(              
\____/   \___/ \__/ (__)             
 _  _   __    ___  __ _  ____  ____  
/ )( \ / _\  / __)(  / )(  __)(    \ 
) __ (/    \( (__  )  (  ) _)  ) D ( 
\_)(_/\_/\_/ \___)(__\_)(____)(____/ 
        ____  __     __   ____  _  _ 
 ___   / ___)(  )   / _\ / ___)/ )( \
(___)  \___ \/ (_/\/    \\___ \) __ (
       (____/\____/\_/\_/(____/\_)(_/
 __ _  _  _  __    __                
(  ( \/ )( \(  )  (  )               
/    /) \/ (/ (_/\/ (_/\             
\_)__)\____/\____/\____/
"""
with open("passwords.csv") as passwords_file:
  passwords_csv = csv.DictReader(passwords_file)
  for passwords_row in passwords_csv:
    compromised_users.append(passwords_row["Username"])

with open("compromised_users.txt",'w') as compromised_user_file:
  for name in compromised_users:
    compromised_user_file.write(name)

with open('boss_message.json','w') as boss_message:
  boss_message_dict={"recipient":"The Boss","message":"Mission Success"}
  json.dump(boss_message_dict,boss_message)

with open("new_password.csv",'w') as new_passwords_obj:
  new_passwords_obj.write(slash_null_sig)






