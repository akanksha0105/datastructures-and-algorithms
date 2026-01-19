const maxFreq = (s) => {
	//Build the map of every character with ntheir frequency
	let map = new Map();
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i]))
			// map.set(s[i], map.get(s[i])++);
			map.set(s[i], map.get(s[i]) + 1);
		else map.set(s[i], 1);
	}

	// Iterate through the map --> if the character is vowel, update for the maximum frequency of vowel; if not then update it for the consonant

	let vowels = ["a", "e", "i", "o", "u"];
	let maxVowel = 0;
	let maxConsonant = 0;

	// Iterate through map
	for (let [char, freq] of map) {
		if (vowels.includes(char.toLowerCase())) {
			maxVowel = Math.max(maxVowel, freq);
		} else {
			maxConsonant = Math.max(maxConsonant, freq);
		}
	}

	return maxVowel + maxConsonant;
};
