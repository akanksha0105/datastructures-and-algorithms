const reverseString = (str) => {
	return str.trim().split("").reverse().join("");
};

const reverseWords = (str) => {
	return str.trim().split(/\s+/).reverse().join(" ");
};

const reverseWordsIgnoreSpecialChars = (str) => {
	// Remove special characters except spaces
	const cleanedStr = str.replace(/[^\w\s]/g, ""); // Removes non-word characters (except spaces)
    console.log("cleaned string : ", cleanedStr )

	return cleanedStr.split(" ").reverse().join(" ");
};

console.log(reverseString("   hello    "));
console.log(reverseWords("  hello world  !"));


const sentence = "Hello world, how are you?";
const reversedSentence = reverseWordsIgnoreSpecialChars(sentence);
console.log(reversedSentence);