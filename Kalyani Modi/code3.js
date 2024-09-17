//Q. Write program to convert decimal to binary in JavaScript?

function decimalToBinary(decimal) {
  if (decimal === 0) {
    return "0";
  }

  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}


const decimalNumber = 42; // Replace with your desired decimal number
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(
  `Binary representation of ${decimalNumber} is: ${binaryRepresentation}`
);
