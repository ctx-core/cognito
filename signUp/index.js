import { promisify } from 'util'
import { Pool } from '../Pool/index.js'
const signUp_ = promisify(Pool.signUp.bind(Pool))
/**
 * @param {string}username
 * @param {string}password
 * @param {module:amazon-cognito-identity-js.CognitoUserAttribute[]}attributes_a
 * @param {module:amazon-cognito-identity-js.CognitoUserAttribute[]}validation_data
 * @returns {Promise<ISignUpResult>}
 */
export async function signUp(
	username,
	password,
	attributes_a,
	validation_data,
) {
	return await signUp_(username, password, attributes_a, validation_data)
}
