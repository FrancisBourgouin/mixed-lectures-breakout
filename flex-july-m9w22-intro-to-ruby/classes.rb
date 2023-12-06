# What's a class ?
# list_of_pets = ["dog","snake","fish","rock","plant","cat"]


class Pet 
  def initialize type
    puts "Creating a pet"
    @type = type
  end

  # attr_reader :type
  # attr_writer :type

  attr_accessor :type

  # def type
  #   return @type
  # end

  # def type=

  def make_a_sound 
    puts "Waf waf" if @type == "dog"
  end
end


rocky = Pet.new("dog")

rocky.make_a_sound

puts rocky.type

rocky.type = "rock"