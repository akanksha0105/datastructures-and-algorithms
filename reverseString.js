//Problem 3 : https://leetcode.com/problems/reverse-string/description/

const reverseString = (str) => {
	let len = str.length;
	let halfLen = Math.floor(len / 2);
	for (let i = 0; i < halfLen; i++) {
		[str[i], str[len - 1 - i]] = [str[len - 1 - i], str[i]];
	}
};
