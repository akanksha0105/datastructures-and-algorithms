const lengthOfLastWord =(str) => {
    const words = str.trim().split(' ');
    return words.length > 0 ? words[words.length - 1].length : 0;
  }
  
  const input = "Hello World ";
  console.log(lengthOfLastWord(input)); // Output: 5


//   Time complexity : O(N)