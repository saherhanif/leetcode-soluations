const rotate = (nums, k) => {
  for (let i = 0; i < k+1; i++) {
    
    
    nums.push(nums.shift());
  }
};

let numbers = [1, 2, 3, 4, 5, 6, 7];
let m = 3;
rotate(numbers, m);

