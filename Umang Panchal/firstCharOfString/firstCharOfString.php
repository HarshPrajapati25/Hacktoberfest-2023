<?php
function firstNonRepeatedCharacter($str)
{
    $charCount = array();

    // Count the frequency of each character in the string
    for ($i = 0; $i < strlen($str); $i++) {
        $char = $str[$i];
        if (isset($charCount[$char])) {
            $charCount[$char]++;
        } else {
            $charCount[$char] = 1;
        }
    }

    // Find the first character with a frequency of 1
    for ($i = 0; $i < strlen($str); $i++) {
        $char = $str[$i];
        if ($charCount[$char] === 1) {
            return $char;
        }
    }

    return null; // or you can return a message like "No non-repeated character found."
}


$inputString = "programming";
$result = firstNonRepeatedCharacter($inputString);
if ($result !== null) {
    echo "The first non-repeated character is: " . $result;
} else {
    echo "No non-repeated character found in the string.";
}
