const isPalindrome = (str) => {
     // Remove all non-alphanumeric characters and convert to lowercase
     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
     // Check if the cleaned string is equal to its reverse
     const reversedStr = cleanedStr.split('').reverse().join('');
     
     return cleanedStr === reversedStr ? 1 : 0;
}