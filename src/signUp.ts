import { promisify } from 'util'
import type { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { Pool } from './Pool'
const signUp_ = promisify(Pool.signUp.bind(Pool))
export async function signUp(
	username:string,
	password:string,
	attributes_a:CognitoUserAttribute[],
	validation_data:CognitoUserAttribute[],
) {
	return await signUp_(
		username,
		password,
		attributes_a,
		validation_data,
	)
}
