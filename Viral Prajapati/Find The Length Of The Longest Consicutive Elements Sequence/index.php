<?php
function longestConsecutive($nums) {
    $numSet = array_flip($nums);
    $maxStreak = 0;

    foreach ($nums as $num) {
        if (!isset($numSet[$num - 1])) {
            $currentNum = $num;
            $currentStreak = 1;

            while (isset($numSet[$currentNum + 1])) {
                $currentNum++;
                $currentStreak++;
            }

            $maxStreak = max($maxStreak, $currentStreak);
        }
    }

    return $maxStreak;
}

$nums = [100, 4, 200, 1, 3, 0, 5, 6];
$result = longestConsecutive($nums);

echo "Length of longest consecutive sequence: $result";
?>