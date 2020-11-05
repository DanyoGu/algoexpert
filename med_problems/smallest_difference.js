function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  let currentDifference;

  let closestCombo;
  let closestDifference = Infinity;

  while(p1 < arrayOne.length && p2 < arrayTwo.length) {
      currentDifference = Math.abs(arrayOne[p1] - arrayTwo[p2]);
      if (currentDifference === 0) return [arrayOne[p1], arrayTwo[p2]];
      if (currentDifference < closestDifference) {
          closestDifference = currentDifference;
          closestCombo = [arrayOne[p1], arrayTwo[p2]];
          console.log(closestDifference);
      }
      if(arrayOne[p1] < arrayTwo[p2]) {
          p1++;
      }else{
          p2++;
      }
  }
  return closestCombo;
}

// Do not edit the line below.
let arrayOne=[10, 0, 20, 25, 2000];
let arrayTwo=[1005, 1006, 1014, 1032, 1031];

console.log(smallestDifference(arrayOne, arrayTwo));
