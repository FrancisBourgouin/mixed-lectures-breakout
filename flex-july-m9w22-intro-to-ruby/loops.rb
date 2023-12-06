list_of_pets = ["dog","snake","fish","rock","plant","cat"]
user = { name:"Bob", username:"iambob", is_admin:true }

puts list_of_pets

# each 
list_of_pets.each do |pet|
  puts "There is a pet, it's a #{pet}"
end

user.each do |key,value|
  puts "Key is #{key} and the value is #{value}"
end

# each_with

list_of_pets.each_with_index do |pet, index|
  puts "There is a pet, it's a #{pet}, at position #{index}"
end

# for 

for value in list_of_pets
  puts value
end

# .times

# 10.times do |number|
#   puts "wiggle"
#   puts number
#   sleep(1)
# end


# 10.times do |number|
#   puts number + 30
# end


# .upto

30.upto(40) do |number|
  puts number
end
