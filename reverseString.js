
const reverseString = (str) => {
	let len = str.length,
		halfLen = Math.floor(len / 2),
		i = 0;
	while (i < halfLen) {
		[str[i], str[len - 1 - i]] = [str[len - 1 - i], str[i]];
        i++;
	}
	return str;
};

console.log(reverseString(["o", "l", "l", "e", "h"]));
