#! /bin/bash

# Read from the command line with read


# echo "What is your name?"
# read user_name

# echo "Nice to meet you $user_name"

echo "Write your \"favorite\" emoji"
read emoji

echo "How many times do you want it?"
read amount


i=0
while [[ $i -lt $amount ]];
do
   echo $emoji >> ./bob.txt
  (( i += 1 ))
done



# Read from a file with read again!
# while read line
# do
#   echo $line
# done < input.txt


# Use command line arguments with $1...