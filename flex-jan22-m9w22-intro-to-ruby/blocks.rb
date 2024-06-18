# Blocks!

def multiply_those num1, num2
  return "whyyyyy" if num1 == 1 || num2 == 1
  num1 * num2
end

def fancify message
  puts "🥔🥔🥔🥔🐔🐔🐔🐔🦜🦜🦜"
  puts message
  puts "🥔🥔🥔🥔🐔🐔🐔🐔🦜🦜🦜"
end

result = multiply_those 5,4
fancify result
  


def fancify_blocks
  puts "🥔🥔🥔🥔🐔🐔🐔🐔🦜🦜🦜"
  yield
  puts "🥔🥔🥔🥔🐔🐔🐔🐔🦜🦜🦜"
end

fancify_blocks { puts multiply_those 5,5 }

fancify_blocks { 
  10.times do
    puts multiply_those 5,5
  end
 }