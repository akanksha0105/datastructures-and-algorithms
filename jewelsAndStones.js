const numJewelsInStones = (jewels, stones) => {
	let jSet = new Set(jewels);
	let count = 0;
	for (let c of stones) {
		if (jSet.has(c)) count++;
	}
	return count;
};

//Brute force
// const numJewelsInStones = function (jewels, stones) {
// 	let count = 0;
// 	for (let i = 0; i < stones.length; i++) {
// 		for (let j = 0; j < jewels.length; j++) {
// 			if (jewels[j] === stones[i]) {
// 				++count;
// 				break;
// 			}
// 		}
// 	}
// 	return count;
// };
