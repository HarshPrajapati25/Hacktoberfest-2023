def fibonacci(n):
    fib_sequence = [0, 1]

    for i in range(2, n):
        next_term = fib_sequence[i-1] + fib_sequence[i-2]
        fib_sequence.append(next_term)

    return fib_sequence

# Example usage:
n_terms = 10
result = fibonacci(n_terms)
print(result)
