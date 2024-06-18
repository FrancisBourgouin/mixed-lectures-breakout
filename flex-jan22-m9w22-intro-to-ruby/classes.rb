# What's a class ?

# A blueprint
# A group of students


class Potato
  def initialize name, happy
    @name = name
    @happy = happy
    @random_id = (0...8).map { (65 + rand(26)).chr }.join

  end

  # attr_reader :name
  # attr_writer :name

  attr_accessor :name

  def happy?
    @happy
  end

  def greet
    puts "Hello, my name is #{name}"
    puts "You killed my father."
    puts "Prepare to die."
  end
end


class SadPotato < Potato
  def initialize name
    super name, false
  end
end


yukon_gold = Potato.new("Patator, Destroyer of Worlds", true)

yukon_gold.name = "Patator, Enjoyer of Cheese"

p yukon_gold

yukon_gold.greet


russett = SadPotato.new("Bob")

p russett