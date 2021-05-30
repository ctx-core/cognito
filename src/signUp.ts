import { promisify } from 'util'
import { Pool } from './Pool'
import type { CognitoUserAttribute } from 'amazon-cognito-identity-js'
const signUp_ = promisify(Pool.signUp.bind(Pool))
export async function signUp(
	username: string,
	password: string,
	attributes_a1: CognitoUserAttribute[],
	validation_data: CognitoUserAttribute[],
) {
	return await signUp_(
		username,
		password,
		attributes_a1,
		validation_data,
	)
}
