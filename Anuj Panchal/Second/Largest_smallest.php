function findLargestAndSmallest($array) {
if (empty($array)) {
return array("largest" => null, "smallest" => null);
}

$largest = $array[0];
$smallest = $array[0];

foreach ($array as $value) {
if ($value > $largest) {
$largest = $value;
}

if ($value < $smallest) { $smallest=$value; } } return array("largest"=> $largest, "smallest" => $smallest);
    }

    $array = [5, 8, 1, 3, 9, 2, 7];
    $result = findLargestAndSmallest($array);

    echo "Largest: " . $result["largest"] . "\n";
    echo "Smallest: " . $result["smallest"] . "\n";