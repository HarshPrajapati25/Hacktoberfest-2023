<?php
$inputString = "Hello 12345 World 6789";

$pattern = '/\d/';
$matches = array();
preg_match_all($pattern, $inputString, $matches);

$numDigits = count($matches[0]);

echo "Number of numerical digits in the string:    " . $numDigits;
