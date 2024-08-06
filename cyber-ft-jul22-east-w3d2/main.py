# Welcome to Python ! :D

# Data Types

## String
## Strings comes in two forms, lines and blocks!

### Single line

print("This is a string!")


### Multiple lines

"Chicken \n Poulet"

print("""
Chicken
  Poulet
    Pollo
  Курка
    Murgi
Digag
Adiye
Doro
""")

## Numeric
## Numerical values fall into multiple types, depending on the precision needed

### Integers

print(5)

### Floats

print(3.14159268979323846)

### Complex

5+4j

### Operations!

print(5 + 5)
print(5 * 5)
print(5 / 5)
print(5 ** 5)

## Boolean
## Boolean values are either True or False, make sure to capitalize them in Python!

True
False


## None
## None defines the absence of a values, often referred to null, undefined or nil in other languages

None

## Sequence
## Sequences are types that enables us to hold multiple values together
## The main gotcha between lists and tuples is that a list is mutable, and a tuple is not

### List
### Each element is mutable, and starts at index 0

list_of_chicken = ["Chicken","Poult","Pollo","Курка","Murgi","Digag","Adiye","Doro"]
list_of_chicken[1] = "Poulet"
list_of_chicken.append("Pocho")
print(list_of_chicken[-2])

### Tuple

tuple_of_chicken = ("Chicken","Poulet","Pollo","Курка","Murgi","Digag","Adiye","Doro")
# tuple_of_chicken[2] = "Something"

### Range

print(range(10))
print(range(3000, 3100, 2))
# 3000, 3002, 3004, ...

## Set
## Sets contain a list of unique elements, and their order is not safe, very useful when you may have repeated elements

some_set = {1,5,1,6,7,9,1}
print(some_set)

## Dict
## Dictionary data type is a structure where we specify a key and a value as a pair
## The key is either a string or a number

coffee_mug = {
  "color":"blue",
  "capacity":400,
  "contains":"coffee"
}

coffee_mug["capacity"]
# Conditional Statements

## If
## Using if enables us to set a condition to do a code block
## Else enables a counter point
## Elif enables a second condition if the first one doesn't pass

### If

if True:
  print("do something!")

### If..else

### If..elif..else

# Loops

## While
## While loops take a condition and then run until that condition is fulfilled
i = 0
while i < 5:
  print("yo")
  i += 1

## For
## For loops are iterating over the elements of another structure, like a list, tuple, range, etc!

for value in range(8000, 8006):
  print(value)


for chicken in list_of_chicken:
  print("This a way to say chicken:", chicken)


[0, 2, 4, ]
range(100,2)
# Start at 0, increment by 2 and stop at 100