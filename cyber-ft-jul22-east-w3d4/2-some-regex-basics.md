# Regex 101

Let's play with some standard values to see how regular expressions work:


# Escaping characters

[]()|? all those have special meaning

When we escape a character, they're escaping their duty as a special character

Actually want [ => \[

# Addendum notes

[1]
[10]
[40]
[1]
[6]

All start with [
All contain a number 0-99
All end with ]

# Phone numbers

514-999-1234
(514) 999-1234
514 999-1234


\(?[0-9]{3}(-|\) )?[0-9]{3}-[0-9]{4}

# Postal codes

H6X 1P0
H6X1P0

[a-z][0-9][a-z] ?[0-9][a-z][0-9]

# Urls

https://somewebsite.com
https://somewebsite.gov
https://somewebsite.ca
http://someunsecurewebsite.ca