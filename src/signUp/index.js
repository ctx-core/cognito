import { promisify } from 'util'
import { Pool } from '../Pool/index.js'
const signUp_ = promisify(Pool.signUp.bind(Pool))
/**
 * @param username{string}
 * @param password{string}
 * @param attributes_a{module:amazon-cognito-identity-js.CognitoUserAttribute[]}
 * @param validation_data{module:amazon-cognito-identity-js.CognitoUserAttribute[]}
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
