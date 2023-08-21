const lengthOfLongestSubstring = (str) => {
  const characterSet = new Set(); 
  let maxLength = 0; 
  let start = 0; 

  for (let end = 0; end < str.length; end++) {
    while (characterSet.has(str[end])) {
      characterSet.delete(str[start]); 
      start++;
    }
    characterSet.add(str[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;


};

const str = "abcabcbb";
console.log(lengthOfLongestSubstring(str));
