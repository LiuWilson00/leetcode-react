const TwoSum = function (nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (ans.length > 0) {
      break;
    }
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (num1 + num2 == target) {
        ans = [i, j];
        break;
      }
    }
  }
  return ans;
};

export default TwoSum;
