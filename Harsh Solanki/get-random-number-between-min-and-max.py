import random

def generate_random_number(minimum, maximum):
    return random.randint(minimum, maximum)

# Example usage:
min_value = 1
max_value = 100

random_number = generate_random_number(min_value, max_value)
print("Random number between {} and {}: {}".format(min_value, max_value, random_number))
