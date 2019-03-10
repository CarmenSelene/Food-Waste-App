import io

food_file = open("food.txt", 'r')
food = food_file.read().split()

for i in range(len(food)):
    food[i] = food[i].lower()
    food[i] = '\"' + food[i] + '\"'
    food[i] += ',' + food[i]

outfile = open("food_out.txt", 'w')
for i in range(len(food)):
    outfile.write(food[i] + "\n")
