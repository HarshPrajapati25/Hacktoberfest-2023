<?php

$arr = array(2,5,1,7,4);
for($i = 0; $i < count($arr); $i++ ) {
 for($j = 0; $j < count($arr)-1; $j++) {
 if($arr[$j+1] < $arr[$j]){
 $temp = $arr[$j+1];
 $arr[$j+1] = $arr[$j];
 $arr[$j] = $temp;
 }
 }
}

print_r($arr);
?>
