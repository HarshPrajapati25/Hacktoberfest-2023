<?php
// Sample array with missing number
$array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 100];

function findMissingNumber($array)
{
    $expectedSum = 0;
    $actualSum = 0;

    $n = count($array);

    for ($i = 1; $i <= 100; $i++) {
        $expectedSum += $i;
    }

    foreach ($array as $num) {
        $actualSum += $num;
    }

    $missingNumber = $expectedSum - $actualSum;

    return $missingNumber;
}

$missingNumber = findMissingNumber($array);
echo "The missing number is: " . $missingNumber;
