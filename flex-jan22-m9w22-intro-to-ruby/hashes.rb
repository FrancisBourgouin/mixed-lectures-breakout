# Hashes
# =>, [], :symbol

cup = {content: "coffee", temperature: "cold"}

cup2 = {
  :content => "coffee",
  :temperature => "cold"
}

p cup
p cup2


# Dot notation doesn't exit!
# To access properties, we use [] with the symbol name
# Motherboard, Logic Board

cup[:content] = "empty"
p cup[:content]