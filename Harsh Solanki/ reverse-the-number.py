def reverse_number(number):
    reversed_num = 0

    while number > 0:
        digit = number % 10
        reversed_num = reversed_num * 10 + digit
        number = number // 10

    return reversed_num

# Get user input for the number
user_input = int(input("Enter a number: "))

# Reverse the number and display the result
reversed_result = reverse_number(user_input)
print("Reversed number: {}".format(reversed_result))
