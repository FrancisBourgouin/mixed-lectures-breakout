# Hashes
# =>, [], :symbol


# Motherboard, Logic Board

user = { name:"Bob", username:"iambob", is_admin:true }
user_but_another = { :name => "Bob" }

puts user
puts user_but_another

puts user[:username]
puts user[:username].empty?

puts user[:username] unless ser[:username].empty?