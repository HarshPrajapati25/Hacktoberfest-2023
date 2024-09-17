<?php
function countVowelAndConsonants($text)
{
    $str = strtolower($text);
    $countV = 0;
    $countC = 0;
    $len = strlen($text);
    for ($i = 0; $i < $len; $i++) {
        if ($str[$i] == 'a' || $str[$i] == 'e' || $str[$i] == 'i' || $str[$i] == 'o' || $str[$i] == 'u') {
            $countV += 1;
        } else if ($str[$i] >= 'a' && $str[$i] <= 'z') {
            $countC += 1;
        } else {
        }
    }
    echo "Number of Vowels is $countV \n";
    echo "Number of Consonants is $countC ";
}

$text = readline("Enter the string: ");
countVowelAndConsonants($text);
