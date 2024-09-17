<?php
    function isPalindrome($s, $start, $end) {
        while ($start < $end) {
            if ($s[$start] !== $s[$end]) {
                return false;
            }
            $start++;
            $end--;
        }
        return true;
    }

    function longestPalindromicSubstring($s) {
        $length = strlen($s);
        
        if ($length <= 1) {
            return $s;
        }

        $start = 0;
        $maxLen = 1;

        for ($i = 0; $i < $length; $i++) {
            for ($j = $i + 1; $j < $length; $j++) {
                $currentLen = $j - $i + 1;
                if ($currentLen > $maxLen && isPalindrome($s, $i, $j)) {
                    $start = $i;
                    $maxLen = $currentLen;
                }
            }
        }

        return substr($s, $start, $maxLen);
    }

    $s1 = "bananas";
    $s2 = "abdcbcdbdcbbc";

    echo longestPalindromicSubstring($s1);  // Output: "anana"
    echo "<br>";
    echo longestPalindromicSubstring($s2);  // Output: "bdcbcdb"
