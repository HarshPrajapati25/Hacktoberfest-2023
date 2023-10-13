def min_coins(coins, value):
    coins.sort(reverse=True)
    num_coins = 0
    for coin in coins:
        num_coins += value // coin
        value %= coin
    return num_coins

# Example usage
coins = [1, 5, 10, 25]
value = 67
print(min_coins(coins, value)) # Output: 5
