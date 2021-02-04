<?php
// ********************* MERGE SORT ***********************************

 function mergeSort($array) {

   if(count($array) == 1) {
     return $array;
   }
   $half = floor(count($array)/2);
   $left = array_slice($array, 0, $half);
   $right = array_slice($array, $half);

  $result1 = mergeSort($left);
  $result2 = mergeSort($right);
  return merge($result1, $result2);
 }
 function merge($array1, $array2) {
   
   $new_arr = array();
   while (!empty($array1) and !empty($array2)) {
     if ($array1[0] > $array2[0]) {
        array_push($new_arr, array_shift($array2));
     }else {
       array_push($new_arr, array_shift($array1));
     }
   }
 
   if(empty($array1) and empty($array2)) {
     return $new_arr;
   }else if(empty($array1)) {
     return array_merge($new_arr, $array2);
   }else {
     return array_merge($new_arr, $array1);
   }
 }

 // ************************** QUICK SORT *************************************
     function quicksort($array)
    {
        if (count($array) == 0)
            return array();
 
        $pivot_element = $array[0];
        $left_element = $right_element = array();
 
        for ($i = 1; $i < count($array); $i++) {
            if ($array[$i] <$pivot_element) {
                $left_element[] = $array[$i];
            }
            else {
                $right_element[] = $array[$i];
            }
        }
 
        return array_merge(quicksort($left_element), array($pivot_element), quicksort($right_element));
    }
?>