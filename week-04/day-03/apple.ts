'use strict';
export { };

let test = require('tape');

class Apple {
	getApple(): string {
		return 'apple';
	}
}

let newApple = new Apple();

test('returns "apple" ', function (t) {
	const actual = newApple.getApple();
	const expected = 'apple';

	t.equal(actual, expected);
	t.end();
});