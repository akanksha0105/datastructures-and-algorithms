const isPalindrome = (str) => {
     // Remove all non-alphanumeric characters and convert to lowercase
     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
     // Check if the cleaned string is equal to its reverse
     const reversedStr = cleanedStr.split('').reverse().join('');
     
     return cleanedStr === reversedStr ? 1 : 0;
}


//can use 2 Two Pointer Approach

const validPalindrome = (s) => {
    // Use regex to remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Initialize two pointers
    let left = 0;
    let right = cleanedStr.length - 1;
    
    // Use two-pointer approach to compare characters from both ends
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }
    
    return true; // Is a palindrome
}