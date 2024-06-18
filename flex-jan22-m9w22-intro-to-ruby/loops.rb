list_of_pets = ["dog","snake","fish","rock","plant","cat"]
user = { name:"Bob", username:"iambob", is_admin:true }

# puts list_of_pets

# each 

list_of_pets.each do |pet|
  puts "Hello #{pet}!"
end

user.each do |something|
  p something
end

# each_with

list_of_pets.each_with_index do |pet, index|
  puts "Hello #{pet} at position #{index}!"
end

# user.each_with_key do |something, index| # BAD!
#   p "something #{something}"
#   p "index #{index}"
# end

# for 

for value in list_of_pets do
  puts value
end

for value in user do
  p value
end


# .times

50.times do |number|
  puts "YEAH! #{number}"
end


# .upto

10.upto(20) do |number|
  puts number
end

20.downto(10) do |number|
  puts number
end


