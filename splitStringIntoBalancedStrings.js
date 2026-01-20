const balancedStringSplit = (s) => {
	let lCount = 0,
		rCount = 0,
		count = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "L") lCount++;
		else rCount++;
		if (lCount === rCount) count = count + 1;
	}
	return count;
};
