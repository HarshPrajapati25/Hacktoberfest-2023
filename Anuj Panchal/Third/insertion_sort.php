function insertionSort($arr) {
$length = count($arr);

for ($i = 1; $i < $length; $i++) { $key=$arr[$i]; $j=$i - 1; while ($j>= 0 && $arr[$j] > $key) {
    $arr[$j + 1] = $arr[$j];
    $j = $j - 1;
    }

    $arr[$j + 1] = $key;
    }

    return $arr;
    }
    $unsortedArray = [12, 11, 13, 5, 6];
    $sortedArray = insertionSort($unsortedArray);

    echo "Sorted array: " . implode(', ', $sortedArray);