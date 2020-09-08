import { CognitoUser } from 'amazon-cognito-identity-js'
import { promisify } from 'util'
export async function changePassword(user:CognitoUser, oldPassword:string, newPassword:string) {
	const _changePassword_promise = promisify(user.changePassword.bind(user))
	return await _changePassword_promise(oldPassword, newPassword)
}
