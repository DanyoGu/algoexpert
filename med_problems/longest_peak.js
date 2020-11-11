function longestPeak(array) {
  // Write your code here.
    let peaks = findPeaks(array);
    console.log(peaks);
    let longestPeak = 0;
    
    for(let i = 0; i < peaks.length; i++) {
        let length = 1;
        let indexLeft = peaks[i];
        while(array[indexLeft - 1] < array[indexLeft]) {
            length++;
            indexLeft--;
        }
        let indexRight = peaks[i];
        while(array[indexRight] > array[indexRight + 1]) {
            length++;
            indexRight++;
						console.log(length);
        }
        if(length > longestPeak) longestPeak = length;
    }
    return longestPeak;
}

function findPeaks(array) {
    let res = [];
    for(let i = 1; i < array.length - 1; i++) {
        if(array[i] > array[i+1] && array[i-1] < array[i]) {
            res.push(i);
        }
    }
    return res;
}
// Do not edit the line below.
exports.longestPeak = longestPeak;