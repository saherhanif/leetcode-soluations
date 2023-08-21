const spiralOrder = (matrix) => {
  let spiralOrderArray = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      spiralOrderArray.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      spiralOrderArray.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
    for (let i = right; i >= left; i--) {
      spiralOrderArray.push(matrix[bottom][i]);
    }
    bottom--;
  }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiralOrderArray.push(matrix[i][left]);
      }
      left++;
    }
  }

  return spiralOrderArray;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log("new array:", spiralOrder(matrix));
