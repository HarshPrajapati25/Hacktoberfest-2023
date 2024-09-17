# String Manipulation in Dart

Welcome to the String Manipulation in Dart guide. In this guide, we'll explore common string
manipulation tasks and provide optimized solutions using the Dart programming language. Our primary
goal is to deliver efficient and concise code while maintaining clarity and functionality.

## Task 1: Remove All Occurrences of a Character

### Problem Statement:

Remove all occurrences of a given character from an input string.

### Solution:

    ```dart
    import 'dart:io';
    
    void main() {
      print("Enter a string: ");
      String input = stdin.readLineSync() ?? ""; // Read user input
      String characterToRemove = 'a'; // Replace 'a' with the character to remove
    
      String result = input.replaceAll(characterToRemove, ''); // Remove all occurrences
      print("Result: $result");
    }

## Task 2: Get Distinct Characters and Their Count

### Problem Statement:

Find distinct characters in a string and count how many times each character appears.

### Solution:
    ```dart

    import 'dart:io';

    void main() {
    print("Enter a string: ");
    String input = stdin.readLineSync() ?? ""; // Read user input

    Map<String, int> charCount = {};

    for (String char in input.split('')) {
         if (charCount.containsKey(char)) {
            charCount[char] += 1;
        } else {
                charCount[char] = 1;
        }
    }

print("Distinct characters and their count:");
charCount.forEach((char, count) {
print("$char: $count");
});
} ```

## Task 3: Reverse Each Word in a Sentence

### Problem Statement:
Reverse each word in a given sentence.

### Solution:
    ```dart
    import 'dart:io';
     
    void main() {
    print("Enter a string: ");
    String input = stdin.readLineSync() ?? ""; // Read user input

    String reversedSentence = input.split(' ').map((word) => word.split('').reversed.join()).join(' ');

    print("Reversed sentence: $reversedSentence");
    }








