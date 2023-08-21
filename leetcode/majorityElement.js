const majorityElement = (nums) => {
  let majority = nums[0]
  let count = 1 

  for (let i = 1; i<nums.length;i++){
    if (nums[i]===majority){
      count++
    }else{
      count--
    }
    
    if(count === 0){
      majority = nums[i]
      count = 1
    }
   
  }
  return majority
    
};

