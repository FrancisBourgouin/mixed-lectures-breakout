# Blocks!

def ten_times_ify
  10.times do 
    yield
  end
end

ten_times_ify { puts "wiggle" }


def greet_someone
  name_to_greet = yield

  puts "Hello #{name_to_greet}"
end

list_of_names = ["Emily","Stephanie","Ayesha","Jane","Mohamed"]

greet_someone {list_of_names.shuffle.first}
