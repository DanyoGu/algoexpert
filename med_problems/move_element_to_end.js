function moveElementToEnd(array, toMove) {
  // Write your code here.
  let p1 = 0;
  let p2 = array.length - 1;
  let num1, num2;

  while(p1 < p2) {
    num1 = array[p1];
    num2 = array[p2];

    if(num1 === toMove && num2 === toMove) {
        p2--;
    }
    else if(num1 === toMove && num2 !== toMove){
        [array[p1], array[p2]] = [array[p2], array[p1]];
        p1++;
        p2--;
    }
    else {
        p1++;
    }
  }
  return array;
}


// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
