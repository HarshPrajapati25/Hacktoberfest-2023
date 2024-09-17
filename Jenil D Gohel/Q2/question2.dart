  // Q. How to get distinct characters and their count in a String?.

  import 'dart:io';

  void main() {
    print("Enter a string: ");
    String input = stdin.readLineSync() ?? ""; // Read user input

    Map<String, int> charCount = getDistinctCharCount(input);

    print("Distinct characters and their count:");
    for (var entry in charCount.entries) {
      print("${entry.key}: ${entry.value}");
    }
  }

  Map<String, int> getDistinctCharCount(String input) {
    Map<String, int> charCount = {};

    for (var char in input.split('')) {
      if (charCount.containsKey(char)) {
        charCount[char]=charCount[char]! + 1;
      } else {
        charCount[char] = 1;
      }
    }

    return charCount;
  }
