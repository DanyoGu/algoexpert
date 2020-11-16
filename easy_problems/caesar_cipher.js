function caesarCipherEncryptor(string, key) {
  // Write your code here.
	let alpha = "abcdefghijklmnopqrstuvwxyz";
	let new_str = "";
	
	for(let i = 0; i < string.length; i++) {
		let current = string[i];
		let oldIndex = alpha.indexOf(current);
		let newIndex = oldIndex + key;
		new_str += alpha[newIndex % alpha.length];
	}
	return new_str;
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;