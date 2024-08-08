# Let's interact with log files again and create a script to interact with log files

import re

match = re.match(r"[a-zA-Z]{5,6}", "Isaac Newton, physicist")

print(match)

find = re.findall(r"\b[a-zA-Z]{5,6}\b", "Isaac Newton, physicist")

print(find)