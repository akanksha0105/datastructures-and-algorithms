//Problem 13 : Reverse Integer
// https://leetcode.com/problems/reverse-integer/description/

const reverseInteger = (x) => {
	let xcopy = x;
	let rev = 0;
	x = Math.abs(x);
	while (x > 0) {
		let rem = x % 10;
		rev = rev * 10 + rem;
		x = Math.floor(x / 10);
	}

	let limit = Math.pow(2, 31);
	if (rev > limit || rev < -limit) return 0;

	return xcopy < 0 ? -rev : rev;
};
