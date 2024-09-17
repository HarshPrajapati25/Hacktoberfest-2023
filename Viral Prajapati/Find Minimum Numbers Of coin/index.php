<?php
function findMinCoins($value) {
    $denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    $numCoins = 0;

    foreach ($denominations as $coin) {
        $numCoins += intdiv($value, $coin);
        $value %= $coin;
    }

    return $numCoins;
}

$value = 70;
$minCoins = findMinCoins($value);

echo "Minimum number of coins for value $value: $minCoins";
?>