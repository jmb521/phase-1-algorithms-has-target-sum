function hasTargetSum(array, target) {
  // for(let i = 0; i< array.length; i++) {
   
  //   for(let j = i + 1; j< array.length; j++) {
  //     if(target - array[i] === array[j]) {
  //       return true
  //     }
  //   }
  // }
  // return false
  const obj = {}
  for(const num of array) {
    const expectedValue = target - num
    if(obj[expectedValue]) {
      return true
    }
    obj[num] = num
  }
  return false
}


/* 
  0(n*2)
*/

/* 
  start a for loop for the first number to test
  start a 2nd loop, for all the other numbers you will compare to the first number and the target.
  return true if the target - num1 = num2
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
