<?php
function removeDuplicates($array)
{
    $uniqueArray = array();
    foreach ($array as $element) {
        if (!in_array($element, $uniqueArray)) {
            $uniqueArray[] = $element;
        }
    }
    return $uniqueArray;
}
$integerArray = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
$uniqueArray = removeDuplicates($integerArray);

print_r($uniqueArray);
