const predictTheWinner = (nums)=> {

const fun1= (i, j)=>{
  if(i==j){
    return nums[i];
  }
  
  let left = nums[i] - fun1(i+1,j);
  let right = nums[j] - fun1(i, j-1);
  
  return Math.max(left, right);
}

    const player1 = fun1(0, nums.length-1);
    return player1>=0;
};

const nums = [1,5,233,7]
console.log("result:- ", predictTheWinner( nums));

