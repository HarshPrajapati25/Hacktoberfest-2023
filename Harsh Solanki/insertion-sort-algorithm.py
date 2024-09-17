def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        # Move elements of arr[0..i-1] that are greater than key
        # to one position ahead of their current position
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key

# Get user input for the list
user_input = input("Enter a list of numbers separated by spaces: ")
user_list = [int(x) for x in user_input.split()]

print("Original list:", user_list)

insertion_sort(user_list)

print("Sorted list:", user_list)
