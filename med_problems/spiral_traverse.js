function spiralTraverse(array) {
  // Write your code here.
    let res = [];

    let startingRow = 0;
    let startingCol = 0;
    let endingRow = array.length - 1;
    let endingCol = array[0].length - 1;

    while(startingRow <= endingRow && startingCol <= endingCol) {
        for(let i = startingCol; i <= endingCol; i++) {
            res.push(array[startingRow][i]);
        }
        for(let i = startingRow + 1; i <= endingRow; i++) {
            res.push(array[i][endingCol]);
        }
        for(let i = endingCol - 1; i >= startingCol; i--) {
          if(startingRow === endingRow) break;  
					res.push(array[endingRow][i]);
					
        }
        for(let i = endingRow - 1; i > startingRow; i--) {
          if(startingCol === endingCol) break;  
					res.push(array[i][startingCol]);
        }
		startingRow++;
        startingCol++;
        endingRow--;
        endingCol--;
    }
	return res;
}
//hellos!!