import { checkPassword } from './PasswordChecker.js';
import { describe, test } from 'node:test';
import * as assert from 'node:assert';

describe('checkPassword', () => {
	const sut = checkPassword;

	test('throws an error if password is not a string', () => {
		assert.throws(() => sut(123), Error);
	});

	test('throws an error if password is not a string and checks error message', () => {
		assert.throws(() => sut(123), { message: 'Password should be a string' });
	});

	test('throws an error if password is less than 8 characters', () => {
		assert.throws(() => sut('abc'), {
			message: 'Password should be at least 8 characters long',
		});
	});

	test('throws an error if password is more than 20 characters', () => {
		assert.throws(() => sut('abcdefghijklmnopqrstuvwxyz'), {
			message: 'Password should be at most 20 characters long',
		});
	});

	test('throws an error if password does not contain at least one lowercase letter', () => {
		assert.throws(() => sut('ABC12345'), {
			message: 'Password should contain at least one lowercase letter',
		});
	});

	test('throws an error if password does not contain at least one uppercase letter', () => {
		assert.throws(() => sut('abc12345'), {
			message: 'Password should contain at least one uppercase letter',
		});
	});

	test('throws an error if password does not contain a digit', () => {
		assert.throws(() => sut('abcABCde'), {
			message: 'Password should contain at least one digit',
		});
	});

	test('throws an error if password does not contain a special character', () => {
		assert.throws(() => sut('abcABC123'), {
			message: 'Password should contain at least one special character',
		});
	});

	test('does not throw an error if password meets all criteria', () => {
		assert.doesNotThrow(() => sut('abcABC123?'), Error);
	});
});
