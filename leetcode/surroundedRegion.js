let board = [
  ["X", "X", "X", "O","X"],
  ["X", "O", "O", "X","X"],
  ["O", "X", "O", "O","X"],
  ["X", "O", "X", "X","O"],
  ["X", "O", "X", "O","X"],
];

const m = board.length;
const n = board[0].length;

const captureRegion = (i, j) => {
  if (i >= m || j >= n || i < 0 || j < 0 || board[i][j] === "X" || board[i][j]==="Y") {
    return;
  }

  board[i][j] = "Y";

  captureRegion(i - 1, j);
  captureRegion(i + 1, j);
  captureRegion(i, j - 1);
  captureRegion(i, j + 1);
};

const solve = (board) => {
  for(let i = 0; i<m;i++){
    captureRegion(i,0)
    captureRegion(i,n - 1)
  }

  for(let j = 0; j<n;j++){
    captureRegion(0,j)
    captureRegion(m-1,j)
  }


  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") {
        board[i][j]="X";
      } 

      if(board[i][j] === "Y"){
        board[i][j] ="O";
      }
    }
  }
};


solve(board);
console.log(board);

