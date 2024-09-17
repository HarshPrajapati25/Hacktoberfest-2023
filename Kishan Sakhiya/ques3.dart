const List<int> listIntNumber = [
  50, 40, 10, 9, 5, 4, 1
];

const List<String> romanNumbers = [
  "L", "XL", "X", "IX", "V", "IV", "I"
];

String intToRoman(int input) {
  var num = input;

  final builders = StringBuffer();
  for (var a = 0; a < listIntNumber.length; a++) {
    final times = (num / listIntNumber[a]).truncate();
    builders.write(romanNumbers[a] * times);
    num -= times * listIntNumber[a];
  }

  return builders.toString();
}

void main() {
  print("Convert a number into a Roman Numeral.");

  for (var i = 1; i <= 50; i++) {
    print('$i : ${intToRoman(i)}');
  }
}