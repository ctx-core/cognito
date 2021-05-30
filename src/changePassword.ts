import type { CognitoUser } from 'amazon-cognito-identity-js'
import { promisify } from 'util'
export async function changePassword(user:CognitoUser, oldPassword:string, newPassword:string) {
	const changePassword_ = promisify(user.changePassword.bind(user))
	return await changePassword_(oldPassword, newPassword)
}
