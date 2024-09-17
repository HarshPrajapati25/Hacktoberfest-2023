// Q. Given a string, reverse each word in the sentence.

import 'dart:io';

void main() {
  print("Enter a string: ");
  String input = stdin.readLineSync() ?? "";

  String reversedSentence =
      input.split(' ').map((word) => word.split('').reversed.join()).join(' ');

  print("Reversed sentence: $reversedSentence");
}
