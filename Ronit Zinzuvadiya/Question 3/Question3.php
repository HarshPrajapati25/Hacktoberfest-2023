<?php
    $arr=array(100,11,12,13,10,15);

    $mintemp=$arr[0];
    $maxtemp=$arr[0];

    foreach($arr as $x)
    {
        if($x<$mintemp)
        {
            $mintemp=$x;
        }

        if($x>$maxtemp)
        {
            $maxtemp=$x;
        }
    }

    echo "Smallest number of array is ".$mintemp.".";
    echo "<br>";
    echo "Largest number of array is ".$maxtemp.".";
?>