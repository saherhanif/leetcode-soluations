
const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

const numIslands = (grid) => {
  const turnToZero = (i, j) => {
    if ( i >= m || j >= n || i < 0 || j < 0 || grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";

    turnToZero(i - 1, j);
    turnToZero(i, j - 1);
    turnToZero(i + 1, j);
    turnToZero(i, j + 1);
    
  };
  


const m = grid.length;
const n = grid[0].length;
let counter = 0;

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j] === "1") {
      counter += 1;
      turnToZero(i, j);
    }
    console.log(grid);
    console.log(i,j);
  }
}
return counter;
};

const islands = numIslands(grid);
console.log("counter:- ", islands);
