import { checkPassword } from './PasswordChecker.js';
import { describe, test } from 'node:test';
import * as assert from 'node:assert';

describe('checkPassword', () => {
	const systemUnderTest = checkPassword;

	test('throws an error if the password is not a string', () => {
		assert.throws(() => systemUnderTest(123), Error);
	});
});
