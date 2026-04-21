function greet(name){
	const trimmedName = name.trim();
	if (!trimmedName) {
		return "Hello, stranger";
	}
	return `Hello, ${trimmedName}`;
}

console.log(greet("world"));
