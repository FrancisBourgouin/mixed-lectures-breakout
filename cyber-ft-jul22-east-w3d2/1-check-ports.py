import sys
# Let's work on checking ports!

# HTTP => 80, 8080, 8001, 8000, 3000
# HTTPS => 443

# Everything under 1024 needs root access





# Let's write some pseudocode first

# Identify the ports to check
80, 8080, 8001, 8000, 3000, 8001
# We could store those ports in a variable that holds multiple values
# Set? List? Tuple? SET FTW!
# We could store the maximum port for production
# Numeric value ? String ?
1024, int("1024")
# print(sys.argv)
# We want to compare a value of a port to the value that is the maximum
1024 > 8000
# If 1024 is bigger, then we say production port
# If 1024 is smaller, then we say dev port






# Let's write the code for one port

# max_port_value = 1024
# crazy_port_value = 10000
# port_to_check = 8000000000

# if max_port_value > port_to_check:
#   print("This port is a production port")
# elif crazy_port_value < port_to_check:
#   print("OMG THAT'S A CRAZY PORT (╯°□°）╯︵ ┻━┻")
# else:
#   print("This port is a development port")

# print("Have a nice day!")






# Let's write the code for multiple ports


# max_port_value = 1024
# crazy_port_value = 10000
list_of_ports_to_check = {8000, 8001, 8001, 7000, 80, 443, 22, 21, 123456789}
another_list_of_ports = {8989, 111, 5432, 2997, 1, 443, 22, 21, 123456789}

# for port in list_of_ports_to_check:
#   if max_port_value > port:
#     print("This port is a production port", port)
#   elif crazy_port_value < port:
#     print("OMG THAT'S A CRAZY PORT (╯°□°）╯︵ ┻━┻", port)
#   else:
#     print("This port is a development port", port)

# print("Have a nice day!")

def check_port_list(some_list):
  max_port_value = 1024
  crazy_port_value = 10000

  for port in some_list:
    if max_port_value > port:
      print("This port is a production port", port)
    elif crazy_port_value < port:
      print("OMG THAT'S A CRAZY PORT (╯°□°）╯︵ ┻━┻", port)
    else:
      print("This port is a development port", port)

  print("Have a nice day!")


check_port_list(another_list_of_ports)
check_port_list(list_of_ports_to_check)