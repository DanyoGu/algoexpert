function productSum(array, factor = 1) {
  // Write your code here.
	let sum = 0;
  array.forEach(ele => {
      if(Array.isArray(ele)){
          sum += productSum(ele, factor+1);
      }
      else{
          sum += ele;
      }
  })
  return sum * factor;
}

// Do not edit the line below.
exports.productSum = productSum;