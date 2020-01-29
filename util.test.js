const mostWanted = require('./mostWanted.js');

test('should output', () => {
	expect(mostWanted("John Paul")).toBe("No match");
});

test('should output', () => {
	expect(mostWanted("paul White")).toBe("First name: Paul White. Aliases: Roger Night, Peter Llong Jr.");
});

test('should output', () => {
	expect(mostWanted("Roger")).toBe("First name: Roger Fedexer. Aliases: Rob Ford, Pete Lord, Roger McWire");
});

test('should output', () => {
	expect(mostWanted("Ross")).toBe("First name: Red Fortress. Aliases: Roger Rabbit, Ross Winter");
});

test('should output', () => {
	expect(mostWanted("white jr")).toBe("First name: Paul White Jr.. Aliases: null");
});

test('should output', () => {
	expect(mostWanted(null)).toBe("First name: Paul White Jr. Aliases: null");
});

test('should output', () => {
	expect(mostWanted("Red")).toBe("First name: Red Fortress. Aliases: Roger Rabbit, Ross Winter");
});

test('should output', () => {
	expect(mostWanted("fedexer")).toBe("First name: Roger Fedexer. Aliases: Rob Ford, Pete Lord, Roger McWire");
});

test('should output', () => {
	expect(mostWanted("rabbit")).toBe("First name: Red Fortress. Aliases: Roger Rabbit, Ross Winter");
});
