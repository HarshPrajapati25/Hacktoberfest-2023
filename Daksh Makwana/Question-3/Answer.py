def number_to_words(number):
    ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    if 0 <= number < 20:
        return ones[number]
    elif 20 <= number < 100:
        return tens[number // 10] + ("-" + ones[number % 10] if number % 10 != 0 else "")
    elif 100 <= number < 1000:
        return ones[number // 100] + " hundred" + (" and " + number_to_words(number % 100) if number % 100 != 0 else "")
    else:
        return "Number out of range"

num = 400
print(number_to_words(num))
