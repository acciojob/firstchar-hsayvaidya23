function firstChar(text) {
  // your code here
	const textTrim = text.trim();

	return textTrim.length > 0 ? textTrim[0] : '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
