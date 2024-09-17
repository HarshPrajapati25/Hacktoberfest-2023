import 'dart:io';

String removeCharacter(String input, String charToRemove) {
  StringBuffer result = StringBuffer();
  for (int i = 0; i < input.length; i++) {
    if (input[i] != charToRemove) {
      result.write(input[i]);
    }
  }
  return result.toString();
}

void main() {
  String? inputString;
  String? charToRemove;

  print("Enter the string :");
  inputString = stdin.readLineSync();
  print("Enter the character to remove :");
  charToRemove = stdin.readLineSync();

  if (inputString != null && charToRemove != null) {
    String modifiedString = removeCharacter(inputString, charToRemove);

    print("Original String: $inputString");
    print("Modified String: $modifiedString");
  }
}

