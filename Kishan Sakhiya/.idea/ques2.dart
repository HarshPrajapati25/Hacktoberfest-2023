void main() {
  print("Program to check if a vowel is present in the string");

  String name = "kishan sakhiya ";

  String? vowel;

  for (int i = 0; i <= name.length - 1; i++) {
    vowel = name[i];

    check(vowel);
  }
}

void check(String vowel) {
  switch (vowel) {
    case "a":
      {
        print("a");
        break;
      }
    case "e":
      {
        print("e");
        break;
      }
    case "i":
      {
        print("i");
        break;
      }
    case "o":
      {
        print("o");
        break;
      }
    case "u":
      {
        print("u");
        break;
      }
  }
}
