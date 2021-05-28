import string
import random

conditions = [
    'New With Tags',
    'New Without Tags',
    'Slightly Used',
]

metals = [
    'Old',
    'Plated',
    'Gold',
    'Silver',
    'Other'
]

stones = [
    'Diamond',
    'Pearl',
    'Saphire',
    'Ruby',
    'Emerald',
    'Onix',
    'Setreme',
    'None'
]

for i in conditions:
    id = ''.join(random.sample(string.ascii_letters+string.digits,12))
    print(f"insert into attributes (id, name, type) values {id, i, 'conition'}")
for i in metals:
    id = ''.join(random.sample(string.ascii_letters+string.digits,12))
    print(f"insert into attributes (id, name, type) values ({id, i, 'metal'})")
for i in stones:
    id = ''.join(random.sample(string.ascii_letters+string.digits,12))
    print(f"insert into attributes (id, name, type) values {id, i, 'stone'}")
