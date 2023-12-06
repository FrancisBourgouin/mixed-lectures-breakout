# == != && ||

if 5 > 4
  puts "Math is right"
elsif "bob" == "bob"
  puts "What??"
else
  puts "Math is wrong"
end


user = { name:"Bob", username:"iambob", is_admin:false }

# unless user[:is_admin]
#   puts "I'm judging you"
# else
#   puts "I like you."
# end

puts "I'm judging you" unless user[:is_admin]
 