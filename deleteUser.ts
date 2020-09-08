import { CognitoUser } from 'amazon-cognito-identity-js'
import { promisify } from 'util'
export async function deleteUser(user:CognitoUser) {
	const _deleteUser_promise = promisify(user.deleteUser.bind(user))
	return await _deleteUser_promise()
}
