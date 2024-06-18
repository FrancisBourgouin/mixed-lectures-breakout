# == != && ||

bob = 5
bob2 = 11

if bob == bob2
  puts "yep!"
elsif bob2 == 10
  puts "bob2 is ten"
else
  puts "nope!"
end


user = {name:"Bob", is_admin:false}

if !user[:is_admin]
  puts "Not authorized!"
end

unless user[:is_admin]
  puts "Not authorized!"
end

puts "Not authorized!" unless user[:is_admin]

# ==, !=, <, <=, <=>

puts 5 <=> 5