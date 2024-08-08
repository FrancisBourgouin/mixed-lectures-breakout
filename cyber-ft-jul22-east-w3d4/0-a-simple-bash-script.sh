#! /bin/bash

# PYTHON & BASH!
# PYTHON IS TOO FLEXIBLE
# PYTHON IS SLOOOOOOOOOOOOOOW
# PYTHON USES C MODULES

# Comments!
# Like in Python, comments starts with #

# Variables!
# Variable names should start with a letter or an underscore (_).
# Variable names can contain letters, numbers, and underscores (_).
# Variable names are case-sensitive.
# Variable names should not contain spaces or special characters.

# 💗="potato" BAD!

# PascalCase => CamelCaseWithFirstLetterCapitalize

# camelCase => isWhenYouCapitalizeTheFirstLetterOfEveryWord
# appalachianCase

# kebab-case => you-stab-every-word-with-a-kebab-stick

# snake_case => ssss_i_am_a_serpent_mwahahaha

# We initialize them with name=value
# We access them using the $ symbol before the variable name

var="Something!"
echo $var


# Conditionals!
# Condtionals statements are also very close to their Python counterpart
# 

number_to_beat=9000
number_received=$1



if [[ $number_received -gt $number_to_beat ]];
then
    echo "IT'S OVER 9000"
elif [[ $number_received -eq $number_to_beat ]];
then
    echo "SAME!" 
else
    echo "IT'S SMALLER"
fi

# Hey can you write me a bash script that will take in a number, if it's bigger than 9000 yell it's bigger than 9000, if it's the same, say same, if it's smaller say smaller

# While Loops!
# We also have while loops in bash
i=1
while [[ $i -le 10 ]] ; do
   echo "$i"
  (( i += 1 ))
done


# For Loops!
# Essentially the same as Python too
# {1..5}
# range(1,5)
for i in {15..50}
do
    echo $i
done