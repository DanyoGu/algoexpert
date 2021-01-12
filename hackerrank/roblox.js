'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'pilesOfBoxes' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY boxesInPiles as parameter.
 * max = 5;
 * secondmost = 2;
 */



function pilesOfBoxes(boxesInPiles) {
    // Write your code here
    let length = boxesInPiles.length;
    if(length <= 1) return 0;
    boxesInPiles.sort((a,b) => a - b);
    
    let count = 0;
    let distinctPiles = 0;
    for(let i = 1; i < length; i++) {
        if(boxesInPiles[i] === boxesInPiles[i-1]) {
            count += distinctPiles;
        }
        else{
            distinctPiles++;
            count += distinctPiles;
        }
    }
    return count;
}

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'maxProfit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER costPerCut
 *  2. INTEGER salePrice
 *  3. INTEGER_ARRAY lengths
 */

function maxProfit(costPerCut, salePrice, lengths) {
    // Write your code here
    let maxLength = Math.max.apply(Math, lengths);
    let maxProfit = 0;

    
    for(let i = 1; i < maxLength; i++) {
        let currentLength = i;
        let numCuts = 0;
        let numPieces = 0;
        
        for(let j = 0; j < lengths.length; j++) {
            let currentRod = lengths[j];
            if(currentRod % currentLength === 0) {
                
            }
            else{
                while(currentRod % currentLength !== 0) {
                    currentRod--;
                }
                numCuts++; 
            }
            
            if(currentRod/currentLength !== 1) {
                numPieces += (currentRod/currentLength) - 1;
                numCuts += (currentRod/currentLength) - 1;
            }
            numPieces++;
        }
        
        let revenue = (salePrice*numPieces*currentLength)-(numCuts*costPerCut);

        if(revenue > maxProfit) {
            maxProfit = revenue;
        }
        
    }
    return maxProfit;
}
