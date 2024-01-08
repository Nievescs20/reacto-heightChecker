function heightChecker(heights) {
  let currentTallest = -Infinity;
  let studentsOutOfOrder = 0;

  for (let i = 0; i < heights.length; i++) {
    const currentStudentHeight = heights[i];

    currentTallest = Math.max(currentTallest, currentStudentHeight);

    //if you're not sure what Math.max does
    // if (currentStudentHeight > currentTallest) {
    //   currentTallest = currentStudentHeight;
    // }

    if (currentStudentHeight < currentTallest) {
      studentsOutOfOrder++;
    }
  }

  return studentsOutOfOrder;
}

console.log(heightChecker([1, 1, 4, 2, 1, 3])); //3
console.log(heightChecker([1, 1, 1, 1, 1, 1])); //0
console.log(heightChecker([1, 2, 3, 4, 5, 6])); //0
console.log(heightChecker([6, 5, 4, 3, 2, 1])); //5
