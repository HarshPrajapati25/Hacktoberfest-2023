<?php
function customArrayDiff($array1, $array2, $compareFunction)
{
    $diff = array();

    foreach ($array1 as $value1) {
        $found = false;

        foreach ($array2 as $value2) {
            if ($compareFunction($value1, $value2)) {
                $found = true;
                break;
            }
        }

        if (!$found) {
            $diff[] = $value1;
        }
    }
    return $diff;
}

function customComparison($a, $b)
{
    return $a === $b;
}

$array1 = [1, 2, 3, 4, 5];
$array2 = [3, 4, 5, 6, 7];

$customDiff = customArrayDiff($array1, $array2, 'customComparison');
// echo "<pre>";
print_r($customDiff);
